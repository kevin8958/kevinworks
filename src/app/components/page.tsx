'use client';
import React, { useState } from 'react';
import { componentsMenus } from '@/constants/common';
import SpotlightCard from '@/components/interaction/SpotlightCard';
import Alert from '@/components/common/Alert';
import Avatar from '@/components/common/Avatar';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import ButtonGroup from '@/components/common/ButtonGroup';
import Checkbox from '@/components/common/Checkbox';
import Datepicker from '@/components/common/DatePicker';
import Progress from '@/components/common/Progress';
import Image from 'next/image';
import dayjs from 'dayjs';
import Typography from '@/components/common/Typography';
import { BsStars } from 'react-icons/bs';
import SplitText from '@/components/interaction/SplitText';

export default function Index() {
  const [selectedOption, setSelectedOption] = useState<Common.ButtonGroupOption>({
    id: 'option1',
    value: 'Option 1',
  });
  const [signleValue, setSignleValue] = useState<Date | null>(dayjs().toDate());

  const buttonGroupOptions = [
    { id: 'option1', value: 'Option 1' },
    { id: 'option2', value: 'Option 2' },
    { id: 'option3', value: 'Option 3' },
  ];

  const handleChangeOption = (option: Common.ButtonGroupOption) => {
    setSelectedOption(option);
  };

  const parseComponent = (component: string) => {
    switch (component) {
      case 'splitText':
        return (
          <SplitText
            variant="h3"
            text="Split Text"
            classes="translate-y-[-16px]"
            delay={100}
            repeat
          />
        );
      case 'alert':
        return <Alert variant="contain" state="info" title="Alert" message="this is a message" />;
      case 'avatar':
        return <Avatar size="md" type="image" state="active" />;
      case 'badge':
        return (
          <Badge color="primary" size="md">
            Badge
          </Badge>
        );
      case 'button':
        return <Button classes="min-w-[80px]">Button</Button>;
      case 'buttonGroup':
        return (
          <ButtonGroup
            size="sm"
            value={selectedOption}
            options={buttonGroupOptions}
            onChange={handleChangeOption}
          />
        );
      case 'checkbox':
        return <Checkbox id="checkbox" checked size="sm" label="Check me" />;
      case 'datePicker':
        return (
          <Datepicker
            classes="w-[200px]"
            type="single"
            value={signleValue}
            onChange={(value: Date | null) => {
              setSignleValue(value);
            }}
          />
        );
      case 'dialog':
        return (
          <Image
            src="/image/dialog_thumbnail.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Dialog Thumbnail"
            className="rounded-lg object-contain"
          />
        );
      case 'drawer':
        return (
          <Image
            src="/image/drawer_thumbnail.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Drawer Thumbnail"
            className="rounded-lg object-contain"
          />
        );
      case 'dropdown':
        return (
          <Image
            src="/image/dropdown_thumbnail.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Dropdown Thumbnail"
            className="rounded-lg object-contain"
          />
        );
      case 'progress':
        return <Progress value={70} width={200} size="md" labelPosition="bottom" isCircle />;
      case 'textInput':
        return (
          <Image
            src="/image/textinput_thumbnail.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Text Input Thumbnail"
            className="rounded-lg object-contain"
          />
        );
      case 'typography':
        return (
          <Image
            src="/image/typography_thumbnail.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Typography Thumbnail"
            className="rounded-lg object-contain"
          />
        );
      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <div>
      {componentsMenus.map((menu) => (
        <div key={menu.id} className="mb-10 grid w-full grid-cols-12 gap-4">
          <div className="col-span-12 flex items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="h4" classes="!text-[#50b4ff]">
              {menu.id}
            </Typography>
          </div>
          {menu.items.map((item) => (
            <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-3">
              <SpotlightCard spotlightColor="rgba(80, 180, 255, 0.7)" href={item.href}>
                <div className="flex w-full flex-col items-start gap-4 pb-4">
                  <div className="bg-primary-990 pointer-events-none relative flex aspect-[3/2] w-full items-center justify-center rounded-lg text-white">
                    {parseComponent(item.id)}
                  </div>
                  <Typography variant="h4" classes="!text-primary-100">
                    {item.label}
                  </Typography>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
