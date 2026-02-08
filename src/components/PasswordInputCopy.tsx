import { useRef, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Toast from "@/components/Toast";

type Props = {
  password: string;
  clearPassword: () => void;
};

function PasswordInputCopy({ password, clearPassword }: Props) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showToast, setShowToast] = useState(false);

  const copyText = useCallback(() => {
    if (!password) return;

    passwordRef.current?.select();
    navigator.clipboard.writeText(password);

    setShowToast(true);
    clearPassword();
  }, [password, clearPassword]);

  return (
    <div className="px-4 space-y-6">
      
      <div className="max-w-3xl mx-auto text-center text-gray-400 text-sm sm:text-base space-y-2">
        <p className="font-medium text-white text-lg">How to Use the Password Generator</p>
        <p>
          Customize your password using the controls below: adjust the length, and choose whether to include numbers and special characters. A longer password with numbers and symbols is more secure.
        </p>
        <p>
          Once a password is generated, it will appear in the input box below. Click the <span className="font-semibold">Copy</span> button to save it to your clipboard. You can then safely paste it wherever you need, such as for online accounts, applications, or secure notes.
        </p>
        <p>
          For optimal security, generate unique passwords for each account and avoid reusing them. Use the generator whenever you need a strong and reliable password instantly.
        </p>
      </div>

      <div
        className="
          max-w-3xl mx-auto
          flex flex-col sm:flex-row gap-3
          p-4
          bg-zinc-900
          border border-zinc-800/70
          rounded-xl
        "
      >
        <Input
          ref={passwordRef}
          value={password}
          readOnly
          placeholder="Generated password..."
          className="
            w-full h-12
            bg-black text-white
            border-zinc-800
            placeholder:text-gray-500
            rounded-md
          "
        />

        <Button
          onClick={copyText}
          disabled={!password}
          className="
            h-12 px-6
            bg-gradient-to-r from-purple-500 to-pink-500
            text-white font-medium
            hover:opacity-90 transition
            rounded-md
          "
        >
          Copy
        </Button>
      </div>

      <Toast
        show={showToast}
        message="Password copied to clipboard"
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

export default PasswordInputCopy;
