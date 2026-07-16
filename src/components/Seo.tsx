import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (metaDescription) {
      metaDescription.content = description;
    }

    const ogTitle = document.querySelector<HTMLMetaElement>("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.content = title;
    }

    const ogDescription = document.querySelector<HTMLMetaElement>("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.content = description;
    }
  }, [description, title]);

  return null;
}
