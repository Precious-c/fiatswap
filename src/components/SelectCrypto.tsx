import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FC, useState } from "react";
import { Crypto } from "@/types";

interface SelectCryptoProps {
  coins: Crypto[];
  selectedCrypto: Crypto | undefined;
  setSelectedCrypto: (coin: Crypto) => void;
}

export const SelectCrypto = ({ coins, selectedCrypto, setSelectedCrypto }: SelectCryptoProps) => {
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between dark:text-muted-foreground border-0"
        >
          {selectedCrypto ? (
            <div className="flex gap-2">
              <img src={selectedCrypto.iconUrl} alt="" className="w-5" />
              {selectedCrypto.name}{" "}
            </div>
          ) : (
            "Select crypto"
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0 ml-4">
        <Command>
          <CommandInput placeholder="Select crypto..." className="h-9" />
          <CommandList>
            <CommandEmpty>No coins found.</CommandEmpty>
            <CommandGroup>
              {coins.map((coin) => (
                <CommandItem
                  key={coin.id}
                  value={coin.name}
                  onSelect={() => {
                    setSelectedCrypto(coin);
                    setOpen(false);
                  }}
                >
                  <div className="flex justify-between w-full">
                    <Check
                      className={cn(
                        "mr-1",
                        selectedCrypto?.id === coin.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="flex justify-between w-full">
                      <p> {coin.name}</p>
                      <img src={coin.iconUrl} alt="" className="w-5" />
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
