import React from "react";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useLayoutEffect(() => {  // useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

    let observerRefValue = null; // <-- variable to hold ref value, because domRef may be unmounted by the time we call unobserve
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
      observerRefValue = domRef.current; // <-- save ref value
    }
  
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue); // <-- use saved value
    };
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}