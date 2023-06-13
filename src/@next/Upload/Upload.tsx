import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import {
  StyledInvisibleInput,
  StyledUploadContainer,
  StyledTextContainer,
  StyledIconContainer,
  StyledUploadedImage,
  StyledUploadedHoverContainer,
  StyledEditIconContainer,
  StyledDeleteIconContainer,
  StyledFileNameContainer,
} from './UploadStyle';
import { Typography } from '../Typography';

export interface UploadProps {
  file: File | null;
  setFile: React.Dispatch<any>;
}

export const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  function Upload({ file, setFile, ...props }: UploadProps, ref) {
    const [attachmentUrl, setAttachmentUrl] = useState<string>('');
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isImage, setIsImage] = useState<boolean>(true);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachmentUrl(reader.result as string);
        setIsImage(reader.result?.toString().startsWith('data:image') ?? false);
      };
      if (file) reader.readAsDataURL(file);
    }, [file]);

    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleDelete = () => {
      setAttachmentUrl('');
      setFile(null);
      setIsHovered(false);
    };

    return (
      <>
        <StyledInvisibleInput
          type="file"
          onChange={e => setFile(e.target.files?.[0])}
          ref={ref || fileInputRef}
          {...props}
        />
        {attachmentUrl ? (
          <StyledUploadContainer
            data-type={isImage ? 'image' : 'non-image'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isImage ? (
              <StyledUploadedImage src={attachmentUrl} />
            ) : (
              <>
                <StyledIconContainer>
                  <Icon name="ri-attachment-fill" />
                </StyledIconContainer>
                <StyledFileNameContainer>
                  <Typography as="span" variant="overline">
                    {file && file.name}
                  </Typography>
                </StyledFileNameContainer>
              </>
            )}
            {isHovered && (
              <>
                <StyledUploadedHoverContainer />
                <StyledEditIconContainer onClick={handleClick}>
                  <Icon name="ri-pencil-line" />
                </StyledEditIconContainer>
                <StyledDeleteIconContainer onClick={handleDelete}>
                  <Icon name="ri-delete-bin-line" />
                </StyledDeleteIconContainer>
              </>
            )}
          </StyledUploadContainer>
        ) : (
          <StyledUploadContainer onClick={handleClick} data-type="initial">
            <StyledIconContainer>
              <Icon name="ri-add" />
            </StyledIconContainer>
            <StyledTextContainer>
              <Typography as="span" variant="button">
                Upload
              </Typography>
            </StyledTextContainer>
          </StyledUploadContainer>
        )}
      </>
    );
  }
);
