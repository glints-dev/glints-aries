import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import {
  StyledInvisibleInput,
  StyledUploadContainer,
  StyledTextContainer,
  StyledIconContainer,
  StyledUploadedImage,
  StyledUploadedHoverContainer,
  StyledHoveredIconContainer,
  StyledFileNameContainer,
  StyledErrorContainer,
  StyledErrorIconContainer,
  StyledErrorTextContainer,
} from './UploadStyle';
import { Spinner } from '../Spinner';
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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachmentUrl(reader.result as string);
        setIsImage(reader.result?.toString().startsWith('data:image') ?? false);
        setIsLoading(false);
      };
      if (file) reader.readAsDataURL(file);
    }, [file]);

    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const MAX_FILE_SIZE = 5; // in MB
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);
      const newFile = event.target.files?.[0];
      if (newFile && newFile.size > MAX_FILE_SIZE * 1024 * 1024) {
        setIsError(true);
        setIsLoading(false);
      } else {
        setIsError(false);
        setFile(newFile);
      }
    };

    const handleDelete = () => {
      setAttachmentUrl('');
      setFile(null);
      setIsHovered(false);
    };

    const unuploadedComponent = (
      <StyledUploadContainer
        onClick={handleClick}
        data-type="initial"
        data-error={isError}
      >
        <StyledIconContainer>
          <Icon name="ri-add" />
        </StyledIconContainer>
        <StyledTextContainer>
          <Typography as="span" variant="button">
            Upload
          </Typography>
        </StyledTextContainer>
      </StyledUploadContainer>
    );

    const loadingComponent = (
      <StyledUploadContainer data-type="loading">
        <StyledIconContainer data-type="loading">
          <Spinner />
        </StyledIconContainer>
        <StyledTextContainer>
          <Typography as="span" variant="overline">
            loading...
          </Typography>
        </StyledTextContainer>
      </StyledUploadContainer>
    );

    const errorComponent = (
      <StyledErrorContainer>
        <StyledErrorIconContainer>
          <Icon name="ri-error-warning-fill" />
        </StyledErrorIconContainer>
        <StyledErrorTextContainer>
          <Typography as="span" variant="subtitle2">
            File too big
          </Typography>
        </StyledErrorTextContainer>
      </StyledErrorContainer>
    );

    const uploadedImageComponent = <StyledUploadedImage src={attachmentUrl} />;

    const uploadedNonImageComponent = (
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
    );

    const hoveredOverlayComponent = (
      <>
        <StyledUploadedHoverContainer />
        <StyledHoveredIconContainer data-type="edit" onClick={handleClick}>
          <Icon name="ri-pencil-line" />
        </StyledHoveredIconContainer>
        <StyledHoveredIconContainer data-type="delete" onClick={handleDelete}>
          <Icon name="ri-delete-bin-line" />
        </StyledHoveredIconContainer>
      </>
    );

    return (
      <>
        <StyledInvisibleInput
          type="file"
          onChange={handleChange}
          ref={ref || fileInputRef}
          {...props}
        />
        {attachmentUrl && !isLoading ? (
          <StyledUploadContainer
            data-type={isImage ? 'image' : 'non-image'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isImage ? (
              <>{uploadedImageComponent}</>
            ) : (
              <>{uploadedNonImageComponent}</>
            )}
            {isHovered && <>{hoveredOverlayComponent}</>}
          </StyledUploadContainer>
        ) : (
          <>
            {isLoading ? <>{loadingComponent}</> : <>{unuploadedComponent}</>}
            {isError && <>{errorComponent}</>}
          </>
        )}
      </>
    );
  }
);
