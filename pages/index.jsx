// @flow

import "../styles/index.css";
import React from "react";

export default () => (
  <div className="tw-bg-white tw-mx-auto tw-max-w-sm tw-shadow-lg tw-rounded-lg tw-overflow-hidden">
    <div className="tw-sm:flex tw-sm:items-center tw-px-6 tw-py-4">
      <img
        className="tw-block tw-h-16 tw-sm:h-24 tw-rounded-full tw-mx-auto tw-mb-4 tw-sm:mb-0 tw-sm:mr-4 tw-sm:ml-0"
        src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
        alt=""
      />
      <div className="tw-text-center tw-sm:text-left tw-sm:flex-grow">
        <div className="tw-mb-4">
          <p className="tw-text-xl tw-leading-tight">Adam Wathan</p>
          <p className="tw-text-sm tw-leading-tight tw-text-grey-dark">
            Developer at NothingWorks Inc.
          </p>
        </div>
        <div>
          <button class="btn-blue">Button</button>
        </div>
      </div>
    </div>
  </div>
);
