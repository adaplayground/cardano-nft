/**
 *
 * Img
 *
 */
import * as React from 'react';
import ImageLoading, {
  Fallback,
  LoadingPlaceholder,
} from 'react-image-loading';

export function Img(props: any) {
  return (
    <ImageLoading>
      {(ref, status) => (
        <>
          {status === 'error' || !props.src ? (
            <Fallback style={{ backgroundColor: 'red' }} />
          ) : (
            <>
              <img ref={ref} {...props} />
              <LoadingPlaceholder
                style={{
                  transition: 'opacity 0.5s',
                  opacity: status === 'loading' ? 1 : 0,
                  backgroundColor: 'PeachPuff',
                }}
                animate={status === 'loading'}
              />
            </>
          )}
        </>
      )}
    </ImageLoading>
  );
}
