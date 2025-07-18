/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpxTiFS69ULcX4wDGEfw3c
// Component: g8sOhmJN9oom
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./PlasmicTextInput2.module.css"; // plasmic-import: g8sOhmJN9oom/css

createPlasmicElementProxy;

export const PlasmicTextInput2__VariantProps = new Array();

export const PlasmicTextInput2__ArgProps = new Array(
  "label",
  "placeholder",
  "fiieldName",
  "type"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTextInput2__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          type: "text"
        },
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textbox.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
        <React.Fragment>
          {(() => {
            try {
              return $props.label;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "First Name";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <input
        data-plasmic-name={"textbox"}
        data-plasmic-override={overrides.textbox}
        className={classNames(projectcss.all, projectcss.input, sty.textbox)}
        name={(() => {
          try {
            return $props.fiieldName;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
        onChange={async (...eventArgs) => {
          (e => {
            generateStateOnChangeProp($state, ["textbox", "value"])(
              e.target.value
            );
          }).apply(null, eventArgs);
        }}
        placeholder={(() => {
          try {
            return $props.placeholder;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
        ref={ref => {
          $refs["textbox"] = ref;
        }}
        required={true}
        type={(() => {
          try {
            return $props.type;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "text";
            }
            throw e;
          }
        })()}
        value={generateStateValueProp($state, ["textbox", "value"]) ?? ""}
      />
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "textbox"],
  text: ["text"],
  textbox: ["textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTextInput2__ArgProps,
          internalVariantPropNames: PlasmicTextInput2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextInput2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextInput2";
  } else {
    func.displayName = `PlasmicTextInput2.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput2 = Object.assign(
  // Top-level PlasmicTextInput2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    textbox: makeNodeComponent("textbox"),
    // Metadata about props expected for PlasmicTextInput2
    internalVariantProps: PlasmicTextInput2__VariantProps,
    internalArgProps: PlasmicTextInput2__ArgProps
  }
);

export default PlasmicTextInput2;
/* prettier-ignore-end */
