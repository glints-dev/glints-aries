import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import {
  StyledInvisibleInput,
  StyledUploadContainer,
  StyledTextContainer,
  StyledIconContainer,
  StyledUploadedImage,
  StyledDeleteButtonContainer,
  StyledDeleteIconContainer,
  StyledErrorContainer,
  StyledErrorIconContainer,
  StyledErrorTextContainer,
} from './UploadStyle';
import { Spinner } from '../Spinner';
import { Typography } from '../Typography';

export interface UploadProps {
  file: File | null;
  handleSetFile: (file: File | null) => void;
  loading?: boolean;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  uploadMessage?: React.ReactNode;
  loadingMessage?: React.ReactNode;
  disableDefaultValidation?: boolean;
  accept?: string;
}

export const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  function Upload(
    {
      file,
      handleSetFile,
      loading,
      objectFit = 'cover',
      uploadMessage = 'Upload',
      loadingMessage = 'loading...',
      disableDefaultValidation = false,
      accept,
      ...props
    }: UploadProps,
    ref
  ) {
    const MAX_FILE_SIZE = 5; // in MB

    const [attachmentUrl, setAttachmentUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(loading);
    const [error, setError] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachmentUrl(reader.result as string);
        setIsLoading(false);
      };
      reader.onloadstart = () => setIsLoading(true);

      if (file) reader.readAsDataURL(file);
    }, [file, loading]);

    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newFile = event.target.files?.[0];
      if (disableDefaultValidation) {
        handleSetFile(event.target.files?.[0] || null);
        return;
      }

      if (newFile && !newFile.type.startsWith('image')) {
        setError('Image required');
        handleSetFile(null);
      } else if (newFile && newFile.size > MAX_FILE_SIZE * 1024 * 1024) {
        setError('File too big');
        handleSetFile(null);
      } else {
        setError('');
        handleSetFile(newFile);
      }
    };

    const handleDelete = () => {
      setAttachmentUrl('');
      handleSetFile(null);
      fileInputRef.current.value = null;
    };

    const unuploadedComponent = (
      <StyledUploadContainer
        onClick={handleClick}
        data-type="initial"
        data-error={!!error}
        data-testid="upload-container"
      >
        <StyledIconContainer>
          <Icon name="ri-add" />
        </StyledIconContainer>
        <StyledTextContainer>
          <Typography as="span" variant="button">
            {uploadMessage}
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
            {loadingMessage}
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
            {error}
          </Typography>
        </StyledErrorTextContainer>
      </StyledErrorContainer>
    );

    const uploadedImageComponent = (
      <StyledUploadedImage src={attachmentUrl} objectFit={objectFit} />
    );

    return (
      <>
        <StyledInvisibleInput
          type="file"
          accept={accept || 'image/*'}
          onChange={handleChange}
          ref={ref || fileInputRef}
          {...props}
        />
        {attachmentUrl && !(loading || isLoading) ? (
          <StyledUploadContainer
            data-type="image"
            data-testid="upload-container"
          >
            {uploadedImageComponent}
            <StyledDeleteButtonContainer onClick={handleDelete}>
              <StyledDeleteIconContainer>
                <Icon name="ri-delete-bin-line" />
              </StyledDeleteIconContainer>
            </StyledDeleteButtonContainer>
          </StyledUploadContainer>
        ) : (
          <>
            {loading || isLoading ? (
              <>{loadingComponent}</>
            ) : (
              <>{unuploadedComponent}</>
            )}
            {!!error && <>{errorComponent}</>}
          </>
        )}
      </>
    );
  }
);
