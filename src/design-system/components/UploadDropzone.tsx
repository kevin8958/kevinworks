import { useCallback, useRef, useState } from 'react';
import { LuCloudUpload } from 'react-icons/lu';
import Typography from '@/design-system/foundation/Typography';
import classNames from 'classnames';

interface UploadDropzoneProps {
  onSelect: (files: File[]) => void; // ✅ 배열
  accept?: string;
  maxSizeMB?: number;
}

export default function UploadDropzone({
  onSelect,
  accept = '*',
  maxSizeMB = 10,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback(
    (file: File) => {
      if (file.size > maxSizeMB * 1024 * 1024) {
        throw new Error(`파일 용량은 ${maxSizeMB}MB 이하만 가능합니다.`);
      }
      return true;
    },
    [maxSizeMB],
  );

  const handleFiles = useCallback(
    (files: File[]) => {
      try {
        const validFiles = files.filter((file) => {
          validate(file);
          return true;
        });

        setSelectedFiles(validFiles);
        setError(null);
        onSelect(validFiles);
      } catch (err: any) {
        setError(err.message);
      }
    },
    [onSelect, validate],
  );

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        hidden
        onChange={(e) => {
          if (!e.target.files) return;
          handleFiles(Array.from(e.target.files));
        }}
      />
      <div
        className={classNames(
          'relative flex h-[160px] w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 transition-all duration-200',
          dragging
            ? 'border-primary-500 bg-primary-500/10' // 드래그 시 은은한 강조
            : 'hover:border-primary-500 border-dashed border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900',
        )}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const files = Array.from(e.dataTransfer.files);
          if (files.length) handleFiles(files);
        }}
      >
        {/* 중앙 아이콘 - 대비 개선 */}
        <div
          className={classNames(
            'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
            dragging ? 'bg-primary-500 text-white' : 'text-primary-500 bg-neutral-800 shadow-lg',
          )}
        >
          <LuCloudUpload className="text-2xl" />
        </div>

        <div className="flex flex-col items-center gap-1">
          {/* 안내문구 (English) */}
          <Typography variant="B2" classes={dragging ? 'text-primary-400' : 'text-neutral-200'}>
            <span className="decoration-primary-500/50 font-semibold underline underline-offset-4">
              Click to upload
            </span>{' '}
            or drag and drop
          </Typography>

          {/* 제약사항 (English) */}
          <Typography variant="C1" classes="text-neutral-500">
            Maximum file size: <span className="text-neutral-400">{maxSizeMB}MB</span>
          </Typography>
        </div>
      </div>

      {/* 선택된 파일 목록 */}
      {selectedFiles.length > 0 && (
        <div className="mt-2 space-y-1">
          {selectedFiles.map((file) => (
            <Typography key={file.name} variant="C1" classes="text-gray-600">
              선택됨: <span className="font-medium">{file.name}</span> (
              {(file.size / 1024 / 1024).toFixed(1)}MB)
            </Typography>
          ))}
        </div>
      )}

      {/* 에러 */}
      {error && (
        <Typography variant="B2" classes="mt-1 text-danger">
          {error}
        </Typography>
      )}
    </>
  );
}
