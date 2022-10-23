import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blog = useLoaderData();
  return (
    <div className="container">
      <h1 className="my-4">Some Important Question</h1>
      <section>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is the purpose of react router ?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Routing is a process in which a user is directed to different
                pages based on their action or request. ReactJS Router is mainly
                used for developing Single Page Web Applications. React Router
                is used to define multiple routes in the application. When a
                user types a specific URL into the browser, and if this URL path
                matches any 'route' inside the router file, the user will be
                redirected to that particular route.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How does Context API Work ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Context API allows to share information to any component, by
                storing it in a central place and allowing access to any
                component that requests it (usually you are only able to pass
                data from parent to child via props).
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What is use REF In React ?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The useRef Hook allows you to persist values between renders. It
                can be used to store a mutable value that does not cause a
                re-render when updated. It can be used to access a DOM element
                directly.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
