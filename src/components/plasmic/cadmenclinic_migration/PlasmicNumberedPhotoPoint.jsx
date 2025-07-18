/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpxTiFS69ULcX4wDGEfw3c
// Component: LwXWGyVs8Nr1
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./PlasmicNumberedPhotoPoint.module.css"; // plasmic-import: LwXWGyVs8Nr1/css

createPlasmicElementProxy;

export const PlasmicNumberedPhotoPoint__VariantProps = new Array();

export const PlasmicNumberedPhotoPoint__ArgProps = new Array(
  "number",
  "children",
  "title",
  "description"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNumberedPhotoPoint__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__hLqWc)}>
        <p
          className={classNames(
            projectcss.all,
            projectcss.p,
            projectcss.__wab_text,
            sty.p___9Gv9Y
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.number;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "01";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </p>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__jScD)}>
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__ifBly)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/image_lab_2024/images/image4.png",
                fullWidth: 553,
                fullHeight: 737,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.children
        })}
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__nFm)}
      >
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.title;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Personalized Consultation";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </h4>
        <p
          className={classNames(
            projectcss.all,
            projectcss.p,
            projectcss.__wab_text,
            sty.p__q0LqM
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.description;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Receive expert advice and a tailored treatment plan that suits your unique facial features and aesthetic goals.";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </p>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "h4"],
  h4: ["h4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNumberedPhotoPoint__ArgProps,
          internalVariantPropNames: PlasmicNumberedPhotoPoint__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNumberedPhotoPoint__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNumberedPhotoPoint";
  } else {
    func.displayName = `PlasmicNumberedPhotoPoint.${nodeName}`;
  }
  return func;
}

export const PlasmicNumberedPhotoPoint = Object.assign(
  // Top-level PlasmicNumberedPhotoPoint renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h4: makeNodeComponent("h4"),
    // Metadata about props expected for PlasmicNumberedPhotoPoint
    internalVariantProps: PlasmicNumberedPhotoPoint__VariantProps,
    internalArgProps: PlasmicNumberedPhotoPoint__ArgProps
  }
);

export default PlasmicNumberedPhotoPoint;
/* prettier-ignore-end */
