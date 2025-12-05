import { Zap, Globe, Mic } from "lucide-react";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 rounded-3xl bg-card border border-white/5 hover:border-white/10 transition-colors">
      <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Zap className="w-6 h-6 text-primary" />}
          title="Détection Instantanée"
          description="Utilise ScreenCaptureKit pour détecter l'audio en temps réel avec une latence minimale."
        />
        <FeatureCard
          icon={<Globe className="w-6 h-6 text-accent-blue" />}
          title="Support Navigateurs"
          description="Fonctionne avec Safari, Chrome, Arc, Brave et Edge pour vos sessions YouTube."
        />
        <FeatureCard
          icon={<Mic className="w-6 h-6 text-accent-purple" />}
          title="Contrôle Intelligent"
          description="Reprise automatique de la musique avec un délai configurable selon vos préférences."
        />
      </div>
    </section>
  );
}
