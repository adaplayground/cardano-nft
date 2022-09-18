import React from 'react';
import { Header } from 'app/components/Header';
import { NextNProgress } from 'app/components/NextNProgress';
import { Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function HomeLayout(props: Props) {
  const location = useLocation();
  const nodeRef = React.useRef(null);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/top-image.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header/>
      <NextNProgress color="#bcac76" options={{ showSpinner: false }}/>
      <main role="main" className="page-wrapper">
        <style jsx>{`
          .fade-enter {
            opacity: 0;
          }

          .fade-exit {
            opacity: 1;
          }

          .fade-enter-active {
            opacity: 1;
          }

          .fade-exit-active {
            opacity: 0;
          }

          .fade-enter-active,
          .fade-exit-active {
            transition: opacity 500ms;
          }
        `}</style>
        <SwitchTransition>
          <CSSTransition
            nodeRef={nodeRef}
            timeout={300}
            classNames="fade"
            key={location.key}
          >
            <div ref={nodeRef}>
              <Switch location={location}>{props.children}</Switch>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>
    </div>
  );
}

type Props = {
  children: any;
};

export default HomeLayout;
