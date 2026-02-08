import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

type Props = {
  length: number;
  setLength: (length: number) => void;
  numbersAllowed: boolean;
  setNumbersAllowed: React.Dispatch<React.SetStateAction<boolean>>;
  charSymbolAllowed: boolean;
  setCharSymbolAllowed: React.Dispatch<React.SetStateAction<boolean>>;
};

function PasswordControls({
  length,
  setLength,
  numbersAllowed,
  setNumbersAllowed,
  charSymbolAllowed,
  setCharSymbolAllowed,
}: Props) {
  return (
    <div className="mx-4 sm:mx-6 md:mx-auto max-w-3xl bg-zinc-900/90 text-white border border-zinc-800 rounded-xl p-6 space-y-6 shadow-lg">

      <div className="space-y-4 text-center">
        <Label className="text-sm text-gray-300 font-medium block text-center">
          Password Length
        </Label>

        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-4">

          <Slider
            min={6}
            max={20}
            step={1}
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            className="w-full sm:w-72 accent-purple-500"
          />

          <span className="text-lg font-semibold text-purple-400 mt-2 sm:mt-0">
            {length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex gap-3 items-center p-4 rounded-lg bg-black/50 border border-zinc-800 cursor-pointer select-none transition hover:bg-black/70">
          <Checkbox
            checked={numbersAllowed}
            onCheckedChange={(v) => setNumbersAllowed(!!v)}
          />
          <div>
            <p className="text-sm font-medium">Allow numbers</p>
            <p className="text-xs text-gray-400">Include digits 0–9 in your password</p>
          </div>
        </label>

        <label className="flex gap-3 items-center p-4 rounded-lg bg-black/50 border border-zinc-800 cursor-pointer select-none transition hover:bg-black/70">
          <Checkbox
            checked={charSymbolAllowed}
            onCheckedChange={(v) => setCharSymbolAllowed(!!v)}
          />
          <div>
            <p className="text-sm font-medium">Special characters</p>
            <p className="text-xs text-gray-400">Include symbols like !@#$%&*</p>
          </div>
        </label>
      </div>
    </div>
  );
}

export default PasswordControls;
