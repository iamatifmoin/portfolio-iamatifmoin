import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />
      <div className="flex flex-row gap-4">
        <Button
          className="text-black"
          linkField={slice.primary.deployed_link}
          label={slice.primary.deployed_link_text}
        />
        <Button
          className="text-black"
          linkField={slice.primary.github_link}
          label={slice.primary.github_link_text}
        />
      </div>
    </div>
  );
};

export default TextBlock;
