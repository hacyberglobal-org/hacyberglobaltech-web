import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Lang } from "@/lib/content";

type SiteContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
  supportOpen: boolean;
  setSupportOpen: (open: boolean) => void;
  presetService: string;
  openSupport: (service?: string) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [supportOpen, setSupportOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("hgt-lang");
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("hgt-lang", next);
  }, []);

  const openSupport = useCallback((service?: string) => {
    if (service) setPresetService(service);
    setSupportOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: copy[lang],
      supportOpen,
      setSupportOpen,
      presetService,
      openSupport,
    }),
    [lang, setLang, supportOpen, presetService, openSupport],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
