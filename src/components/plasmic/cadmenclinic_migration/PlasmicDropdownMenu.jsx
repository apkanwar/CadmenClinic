/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpxTiFS69ULcX4wDGEfw3c
// Component: wWAwpk96_w-l
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  get as $stateGet,
  hasVariant,
  renderPlasmicSlot,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_4IUcgkiijTv2 } from "../blank_website/PlasmicGlobalVariant__Screen"; // plasmic-import: 4iUCGKIIJTv2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./PlasmicDropdownMenu.module.css"; // plasmic-import: wWAwpk96_w-l/css
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: -haejZhddBM_/icon

createPlasmicElementProxy;

export const PlasmicDropdownMenu__VariantProps = new Array("open");

export const PlasmicDropdownMenu__ArgProps = new Array("title", "children");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDropdownMenu__RenderFunc(props) {
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
        path: "open",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.open
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_4IUcgkiijTv2()
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
        { [sty.rootopen]: hasVariant($state, "open", "open") }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"dropLink"}
        data-plasmic-override={overrides.dropLink}
        hasGap={true}
        className={classNames(projectcss.all, sty.dropLink, {
          [sty.dropLinkopen]: hasVariant($state, "open", "open")
        })}
        onClick={async event => {
          const $steps = {};
          $steps["updateOpen"] = true
            ? (() => {
                const actionArgs = {
                  vgroup: "open",
                  operation: 2,
                  value: "open"
                };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }
                  const oldValue = $stateGet($state, vgroup);
                  $stateSet($state, vgroup, !oldValue);
                  return !oldValue;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateOpen"] != null &&
            typeof $steps["updateOpen"] === "object" &&
            typeof $steps["updateOpen"].then === "function"
          ) {
            $steps["updateOpen"] = await $steps["updateOpen"];
          }
        }}
      >
        <div className={classNames(projectcss.all, sty.freeBox__x1Ksu)}>
          {renderPlasmicSlot({
            defaultContents: "Services",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
        <Icon18Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg, {
            [sty.svgopen]: hasVariant($state, "open", "open")
          })}
          role={"img"}
        />
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__oyRzh, {
          [sty.freeBoxopen__oyRzHvpDbm]: hasVariant($state, "open", "open")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__cwjNn
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Enter some text"}
            </PlasmicLink__>
          ),

          value: args.children
        })}
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "dropLink", "svg"],
  dropLink: ["dropLink", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDropdownMenu__ArgProps,
          internalVariantPropNames: PlasmicDropdownMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDropdownMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDropdownMenu";
  } else {
    func.displayName = `PlasmicDropdownMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicDropdownMenu = Object.assign(
  // Top-level PlasmicDropdownMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dropLink: makeNodeComponent("dropLink"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicDropdownMenu
    internalVariantProps: PlasmicDropdownMenu__VariantProps,
    internalArgProps: PlasmicDropdownMenu__ArgProps
  }
);

export default PlasmicDropdownMenu;
/* prettier-ignore-end */
