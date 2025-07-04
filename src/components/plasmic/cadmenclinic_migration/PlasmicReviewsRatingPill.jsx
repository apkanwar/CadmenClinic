/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpxTiFS69ULcX4wDGEfw3c
// Component: lUTkTuQcsEcx
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_4IUcgkiijTv2 } from "../blank_website/PlasmicGlobalVariant__Screen"; // plasmic-import: 4iUCGKIIJTv2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./PlasmicReviewsRatingPill.module.css"; // plasmic-import: lUTkTuQcsEcx/css
import { StarIcon } from '@heroicons/react/24/solid'


createPlasmicElementProxy;

export const PlasmicReviewsRatingPill__VariantProps = new Array();

export const PlasmicReviewsRatingPill__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReviewsRatingPill__RenderFunc(props) {
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
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__bNuax)}
      >
        {/* <PlasmicImg__
          alt={""}
          className={classNames(sty.img__uJnuj)}
          displayHeight={"12px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/image_lab_2024/images/image2.svg",
            fullWidth: 184,
            fullHeight: 27,
            aspectRatio: 6.814815
          }}
        /> */}
        {/* <StarIcon className='h-5 w-5 text-yellow-400' /> */}
              {/* <div className='flex flex-row space-x-1'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i}>
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                  </div>
                ))}
              </div> */}
        <p
          className={classNames(
            projectcss.all,
            projectcss.p,
            projectcss.__wab_text,
            sty.p__z0Ts7
          )}
        >
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 600, color: "#9a7f71" }}
            >
              {"4.9"}
            </span>
            <React.Fragment>{" /5.0"}</React.Fragment>
          </React.Fragment>
        </p>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__qSoGt)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__t8L9I)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"24px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/image_lab_2024/images/image3.svg",
            fullWidth: 54,
            fullHeight: 54,
            aspectRatio: 1
          }}
        />

        <p
          className={classNames(
            projectcss.all,
            projectcss.p,
            projectcss.__wab_text,
            sty.p___1EbXf
          )}
        >
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ color: "#080909" }}
            >
              {"200+ reviews"}
            </span>
          </React.Fragment>
        </p>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicReviewsRatingPill__ArgProps,
          internalVariantPropNames: PlasmicReviewsRatingPill__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReviewsRatingPill__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReviewsRatingPill";
  } else {
    func.displayName = `PlasmicReviewsRatingPill.${nodeName}`;
  }
  return func;
}

export const PlasmicReviewsRatingPill = Object.assign(
  // Top-level PlasmicReviewsRatingPill renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicReviewsRatingPill
    internalVariantProps: PlasmicReviewsRatingPill__VariantProps,
    internalArgProps: PlasmicReviewsRatingPill__ArgProps
  }
);

export default PlasmicReviewsRatingPill;
/* prettier-ignore-end */
