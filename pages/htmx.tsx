// src/app/htmx.tsx
const HtmxPage = () => {
    return (
      <div>
        <h1>HTMX with Next.js</h1>
        <button
          hx-get="/api/hello"
          hx-trigger="click"
          hx-target="#htmx-content"
          onClick={() => console.log('Button clicked')}
        >
          Click me to load content
        </button>
        <div id="htmx-content"></div>
      </div>
    );
  };
  
  export default HtmxPage;
  