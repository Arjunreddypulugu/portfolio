import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio';

type ImageWithBasePathProps = ImageProps & {
  src: string;
};

const ImageWithBasePath = (props: ImageWithBasePathProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  
  useEffect(() => {
    // Only modify relative paths that don't start with http/https
    if (typeof props.src === 'string' && !props.src.startsWith('http')) {
      // Don't double-prepend the basePath
      if (!props.src.startsWith(basePath)) {
        setImageSrc(`${basePath}${props.src.startsWith('/') ? '' : '/'}${props.src}`);
      } else {
        setImageSrc(props.src);
      }
    } else {
      setImageSrc(props.src);
    }
  }, [props.src]);

  // Wait until we've processed the src on the client side
  if (!imageSrc) {
    return null;
  }

  // Pass all props except src, then override src with our computed path
  const { src, ...rest } = props;
  return <Image {...rest} src={imageSrc} />;
};

export default ImageWithBasePath;

// Also export a function to use in places where you can't use the component
export function getImagePath(src: string): string {
  if (typeof src === 'string' && !src.startsWith('http')) {
    if (!src.startsWith(basePath)) {
      return `${basePath}${src.startsWith('/') ? '' : '/'}${src}`;
    }
  }
  return src;
} 