'use client';

import { ChevronDownIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { useRef, useState, type FC } from 'react';
import { useGetCurrencies } from '@/services/currencies/queries';

type CurrencyInputProps = {
  convertedAmount?: number;
  defaultCode: string;
  defaultAmount: number;
  onChange: (value: number, code: string) => void;
  disabled?: boolean;
};

type CurrencyInputs = {
  code: string;
  value: string;
};

export const CurrencyInput: FC<CurrencyInputProps> = ({
  onChange,
  defaultCode,
  defaultAmount,
  convertedAmount,
  disabled
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputs, setInputs] = useState<CurrencyInputs>({ code: defaultCode, value: String(defaultAmount) });
  const { data, isLoading, isPending } = useGetCurrencies({ enabled: true });

  const isDisabled = isLoading || isPending || !data || !data.length || disabled;
  const label = data?.find((opt) => opt.short_code === inputs?.code)?.name || 'Select currency';

  const amount = convertedAmount !== undefined ? String(convertedAmount) : inputs.value;

  const handleChange = ({ code, value }: Partial<CurrencyInputs>) => {
    const nextCode = code ?? inputs?.code;
    const nextValue = value ?? amount;

    setInputs({ value: nextValue, code: nextCode });

    if (nextValue !== '') {
      onChange(Number(nextValue), nextCode);
    }

    inputRef.current?.focus();
  };

  return (
    <div className="grid w-full max-w-sm gap-2">
      <InputGroup
        className="
          h-10.5
        hover:border-blue-700
        has-[[data-slot=input-group-control]:focus-visible]:border-blue-700
          has-[[data-slot=input-group-control]:focus-visible]:ring-3
        has-[[data-slot=input-group-control]:focus-visible]:ring-blue-700/50"
      >
        <InputGroupInput
          data-testid="currency-input"
          className="no-spinner text-[0.875rem] min-w-[30%] max-w-[30%] w-full"
          type="number"
          ref={inputRef}
          placeholder=""
          value={amount}
          aria-label="Currency field"
          onChange={(e) => handleChange({ value: e.target.value })}
        />
        <span className="text-gray-300 text-[1.5rem]">|</span>
        <InputGroupAddon align="inline-end" className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger
              disabled={isDisabled}
              data-testid="currencies-trigger"
              render={
                <InputGroupButton
                  variant="ghost"
                  disabled={isDisabled}
                  aria-label="More currencies"
                  className="max-w-52.5 justify-end p-0 w-full text-ellipsis m-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0"
                />
              }
            >
              <span className="w-full overflow-x-hidden text-end" title={label}>
                {label}
              </span>
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8} alignOffset={-4}>
              <DropdownMenuGroup>
                {data?.map((currency) => (
                  <DropdownMenuItem
                    key={`${currency.symbol}-${currency.short_code}`}
                    onClick={() => handleChange({ code: currency.short_code })}
                  >
                    {currency.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
