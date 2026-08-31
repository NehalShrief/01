import React, { useRef } from 'react';
import { UploadCloud, CheckCircle2, RotateCcw, Loader2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useImageSlots } from '../context/ImageSlotContext';

interface SlotImageUploaderProps {
  slotId: string;
  slotLabel?: string;
  className?: string;
  variant?: 'button' | 'badge' | 'compact' | 'overlay';
  onImageLoaded?: (url: string) => void;
}

export const SlotImageUploader: React.FC<SlotImageUploaderProps> = ({
  slotId,
  slotLabel = 'Image Slot',
  className = '',
  variant = 'button',
  onImageLoaded,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { slots, isUploading, uploadSuccess, uploadImage, resetSlot } = useImageSlots();

  const isCurrentUploading = !!isUploading[slotId];
  const isCurrentSuccess = !!uploadSuccess[slotId];
  const currentImageUrl = slots[slotId];
  const isCustomized = currentImageUrl && currentImageUrl.startsWith('/uploads/');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadedUrl = await uploadImage(slotId, file);
    if (uploadedUrl && onImageLoaded) {
      onImageLoaded(uploadedUrl);
    }
    // Reset file input value so user can upload the same file again if desired
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTriggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetSlot(slotId);
  };

  if (variant === 'overlay') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <button
          onClick={handleTriggerUpload}
          disabled={isCurrentUploading}
          title={`Upload permanent image for ${slotLabel}`}
          className="px-2.5 py-1.5 bg-[#221F1A]/90 hover:bg-[#8A4E28] text-[#EDE9E0] text-[11px] font-mono-plex font-medium rounded-lg backdrop-blur-md border border-white/20 shadow-md transition-all flex items-center gap-1.5 cursor-pointer hover:scale-102"
        >
          {isCurrentUploading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#EDE9E0]" />
              <span>Saving...</span>
            </>
          ) : isCurrentSuccess ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Saved!</span>
            </>
          ) : (
            <>
              <UploadCloud className="w-3.5 h-3.5 text-[#EDE9E0]" />
              <span>Upload from device</span>
            </>
          )}
        </button>

        {isCustomized && (
          <button
            onClick={handleReset}
            title="Reset to default reference render"
            className="p-1.5 bg-[#221F1A]/80 hover:bg-[#EF4444] text-[#EDE9E0] rounded-lg border border-white/15 backdrop-blur-md transition-all cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <button
          onClick={handleTriggerUpload}
          disabled={isCurrentUploading}
          className="px-2 py-1 bg-[#E4DFD3] hover:bg-[#8A4E28] hover:text-white text-[#221F1A] text-[10px] font-mono-plex font-medium rounded border border-[#221F1A]/15 shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
        >
          {isCurrentUploading ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : isCurrentSuccess ? (
            <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
          ) : (
            <UploadCloud className="w-3 h-3" />
          )}
          <span>Upload</span>
        </button>

        {isCustomized && (
          <button
            onClick={handleReset}
            title="Reset to default render"
            className="p-1 text-[#5B564C] hover:text-[#EF4444] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-2.5 h-2.5" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        onClick={handleTriggerUpload}
        disabled={isCurrentUploading}
        className="px-3 py-1.5 bg-[#EDE9E0] hover:bg-[#8A4E28] hover:text-white text-[#221F1A] border border-[#221F1A]/20 rounded-lg text-xs font-mono-plex font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer hover:scale-102"
      >
        {isCurrentUploading ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#8A4E28]" />
            <span>Saving to Source...</span>
          </>
        ) : isCurrentSuccess ? (
          <>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Saved as Static Asset</span>
          </>
        ) : (
          <>
            <UploadCloud className="w-3.5 h-3.5 text-[#8A4E28] group-hover:text-white" />
            <span>Upload from device</span>
          </>
        )}
      </button>

      {isCustomized && (
        <div className="flex items-center gap-1.5 text-[11px] font-mono-plex text-[#5B564C]">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span>Custom Asset Active</span>
          <button
            onClick={handleReset}
            title="Reset to default original render"
            className="ml-1 text-xs text-[#8A4E28] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      )}
    </div>
  );
};
