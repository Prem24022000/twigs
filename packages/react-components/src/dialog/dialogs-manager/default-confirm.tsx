import { ReactNode, isValidElement } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle
} from '../../alert-dialog';
import { Button, ButtonProps } from '../../button';

export type DefaultConfirmDialogProps = {
  title: ReactNode;
  content: ReactNode;
  labels?: {
    confirm?: ReactNode;
    cancel?: ReactNode;
  };
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  closeOnConfirm?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

export const DefaultConfirmDialog = ({
  title,
  content,
  labels = {
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  closeOnConfirm = true,
  cancelButtonProps,
  confirmButtonProps,
  onConfirm,
  onCancel,
  onClose
}: DefaultConfirmDialogProps) => {
  return (
    <AlertDialog
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          onClose?.();
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{content}</AlertDialogDescription>
        <AlertDialogActions>
          {labels.cancel && (
            <AlertDialogCancel asChild>
              {isValidElement(labels.cancel) ? (
                labels.cancel
              ) : (
                <Button
                  color="default"
                  size="lg"
                  onClick={onCancel}
                  {...cancelButtonProps}
                >
                  {labels.cancel}
                </Button>
              )}
            </AlertDialogCancel>
          )}
          {labels.confirm && (
            <ConfirmButtonWrapper useActionWrapper={closeOnConfirm}>
              {isValidElement(labels.confirm) ? (
                labels.confirm
              ) : (
                <Button
                  color="default"
                  size="lg"
                  onClick={onConfirm}
                  {...confirmButtonProps}
                >
                  {labels.confirm}
                </Button>
              )}
            </ConfirmButtonWrapper>
          )}
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const ConfirmButtonWrapper = ({
  useActionWrapper,
  children
}: {
  useActionWrapper?: boolean;
  children?: ReactNode;
}) => {
  if (useActionWrapper) {
    return <AlertDialogAction asChild>{children}</AlertDialogAction>;
  }

  return <>{children}</>;
};
