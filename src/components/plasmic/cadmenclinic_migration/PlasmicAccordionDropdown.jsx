/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpxTiFS69ULcX4wDGEfw3c
// Component: oPtux9x10OXo
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./PlasmicAccordionDropdown.module.css"; // plasmic-import: oPtux9x10OXo/css

createPlasmicElementProxy;

export const PlasmicAccordionDropdown__VariantProps = new Array();

export const PlasmicAccordionDropdown__ArgProps = new Array(
  "question",
  "answer"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAccordionDropdown__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"11111"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAccordionDropdown__ArgProps,
          internalVariantPropNames: PlasmicAccordionDropdown__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAccordionDropdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccordionDropdown";
  } else {
    func.displayName = `PlasmicAccordionDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicAccordionDropdown = Object.assign(
  // Top-level PlasmicAccordionDropdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicAccordionDropdown
    internalVariantProps: PlasmicAccordionDropdown__VariantProps,
    internalArgProps: PlasmicAccordionDropdown__ArgProps
  }
);

export default PlasmicAccordionDropdown;
/* prettier-ignore-end */
