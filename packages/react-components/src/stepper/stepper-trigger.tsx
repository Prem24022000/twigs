import { styled } from '../../stitches.config';
import { Flex } from '../flex';
import { Text } from '../text';

const StyledStepperTriggerContainer = styled(Flex, {
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$7',
  backgroundColorOpacity: ['$accent500', 0.06],
  borderBottomStyle: 'solid',
  borderBottomWidth: '$xs',
  borderColorOpacity: ['$accent500', 0.15]
});

const StyledStepCounter = styled(Text, {
  height: '$5',
  width: '$5',
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderColor: '$neutral700',
  borderRadius: '$round',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const StyledStepperButton = styled('button', {
  background: 'transparent',
  border: 'none',
  height: '$11',
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$neutral400',
  fontWeight: '$7',
  padding: '0px !important',
  [`& ${StyledStepCounter}`]: {
    fontSize: '$xs'
  },
  variants: {
    active: {
      true: {
        color: '$colors$accent500',
        [`& ${StyledStepCounter}`]: {
          borderColor: '$accent500'
        }
      }
    },
    completed: {
      true: {
        color: '$neutral700',
        [`& ${StyledStepCounter}`]: {
          backgroundColor: '$neutral700'
        }
      }
    }
  }
});

export const StepperTrigger = StyledStepperButton;
export const StepperTriggerContainer = StyledStepperTriggerContainer;
export const StepperCount = StyledStepCounter;
