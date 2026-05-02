import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

interface CoachingCheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type PackageId = "coaching_single" | "coaching_pack_4" | "coaching_pack_8";

interface Package {
  id: PackageId;
  name: string;
  sessions: string;
  price: string;
  perSession?: string;
  savings?: string;
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: "coaching_single",
    name: "Single Session",
    sessions: "1 session",
    price: "$150",
  },
  {
    id: "coaching_pack_4",
    name: "4-Session Package",
    sessions: "4 sessions",
    price: "$560",
    perSession: "$140 / session",
    savings: "Save $40",
    popular: true,
  },
  {
    id: "coaching_pack_8",
    name: "8-Session Package",
    sessions: "8 sessions",
    price: "$1,080",
    perSession: "$135 / session",
    savings: "Save $120",
  },
];

const CoachingCheckoutDialog = ({ open, onOpenChange }: CoachingCheckoutDialogProps) => {
  const [selected, setSelected] = useState<PackageId | null>(null);

  const handleClose = (next: boolean) => {
    if (!next) setSelected(null);
    onOpenChange(next);
  };

  const returnUrl = `${window.location.origin}/pay/success?session_id={CHECKOUT_SESSION_ID}`;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <PaymentTestModeBanner />
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {selected ? "Complete Your Purchase" : "Choose Your Coaching Package"}
            </DialogTitle>
            <DialogDescription>
              {selected
                ? "Secure checkout powered by Stripe."
                : "One-on-one sessions with an experienced meditation teacher."}
            </DialogDescription>
          </DialogHeader>

          {!selected && (
            <div className="grid gap-4 mt-6">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelected(pkg.id)}
                  className={`relative text-left rounded-xl border p-5 transition-all hover:border-accent hover:shadow-md ${
                    pkg.popular ? "border-accent ring-1 ring-accent" : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-2 right-4 text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg text-foreground">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{pkg.sessions}</p>
                      {pkg.perSession && (
                        <p className="text-xs text-muted-foreground mt-1">{pkg.perSession}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-serif text-foreground">{pkg.price}</p>
                      {pkg.savings && (
                        <p className="text-xs text-sage font-medium mt-1">{pkg.savings}</p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
              <p className="text-xs text-muted-foreground text-center mt-2">
                After purchase, we'll help you schedule your first session right away.
              </p>
            </div>
          )}

          {selected && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-muted">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sage" />
                  <span className="text-sm font-medium">
                    {packages.find((p) => p.id === selected)?.name}
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelected(null)}>
                  Change
                </Button>
              </div>
              <StripeEmbeddedCheckout priceId={selected} returnUrl={returnUrl} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoachingCheckoutDialog;
