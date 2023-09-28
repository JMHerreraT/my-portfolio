export enum DirectionType {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
}

export const fadeIn = (direction: DirectionType, delay: number) => {
    return {
      hidden: {
        y: direction === DirectionType.UP ? 80 : direction === DirectionType.DOWN ? -80 : 0,
        opacity: 0,
        x: direction === DirectionType.LEFT ? 80 : direction === DirectionType.RIGHT ? -80 : 0,
        transition: {
          type: 'tween',
          duration: 1.5,
          delay: delay,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.4,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  