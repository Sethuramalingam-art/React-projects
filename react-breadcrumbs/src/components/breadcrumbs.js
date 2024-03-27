import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadCrumbPath = "";

  return (
    <div>
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        breadCrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}> / {name}</span>
        ) : (
          <Link to={breadCrumbPath} key={name}>
            / {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
