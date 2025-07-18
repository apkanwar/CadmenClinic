/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpxTiFS69ULcX4wDGEfw3c
// Component: j2K8ACviacvY
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicIcon as PlasmicIcon__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./PlasmicBookingServicesDropdown.module.css"; // plasmic-import: j2K8ACviacvY/css
import InfoIconSvg2Icon from "./icons/PlasmicIcon__InfoIconSvg2"; // plasmic-import: jTchhOCtiNyi/icon
import InfoIconWhiteSvgIcon from "./icons/PlasmicIcon__InfoIconWhiteSvg"; // plasmic-import: xTZUu34grqD1/icon

createPlasmicElementProxy;

export const PlasmicBookingServicesDropdown__VariantProps = new Array(
  "selected"
);

export const PlasmicBookingServicesDropdown__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBookingServicesDropdown__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
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
        sty.root,
        { [sty.rootselected]: hasVariant($state, "selected", "selected") }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <InfoIconSvg2Icon
          className={classNames(projectcss.all, sty.svg__syzhs, {
            [sty.svgselected__syzhsyopOf]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          })}
          role={"img"}
        />

        {(hasVariant($state, "selected", "selected") ? true : false) ? (
          <PlasmicIcon__
            PlasmicIconType={
              hasVariant($state, "selected", "selected")
                ? InfoIconWhiteSvgIcon
                : InfoIconSvg2Icon
            }
            className={classNames(projectcss.all, sty.svg__dQdT7, {
              [sty.svgselected__dQdT7YopOf]: hasVariant(
                $state,
                "selected",
                "selected"
              )
            })}
            role={"img"}
          />
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mc2Sz,
            {
              [sty.textselected__mc2SzyopOf]: hasVariant(
                $state,
                "selected",
                "selected"
              )
            }
          )}
        >
          {"General Aesthetic Consultation"}
        </div>
      </Stack__>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__rRaye,
          {
            [sty.textselected__rRayeyopOf]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          }
        )}
      >
        {"free"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBookingServicesDropdown__ArgProps,
          internalVariantPropNames: PlasmicBookingServicesDropdown__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBookingServicesDropdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBookingServicesDropdown";
  } else {
    func.displayName = `PlasmicBookingServicesDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicBookingServicesDropdown = Object.assign(
  // Top-level PlasmicBookingServicesDropdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicBookingServicesDropdown
    internalVariantProps: PlasmicBookingServicesDropdown__VariantProps,
    internalArgProps: PlasmicBookingServicesDropdown__ArgProps
  }
);

export default PlasmicBookingServicesDropdown;
/* prettier-ignore-end */
