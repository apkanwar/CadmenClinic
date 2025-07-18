// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpxTiFS69ULcX4wDGEfw3c
// Component: NE5t6IteXed-
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_4IUcgkiijTv2 } from "../blank_website/PlasmicGlobalVariant__Screen"; // plasmic-import: 4iUCGKIIJTv2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: NE5t6IteXed-/css
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: Z77dPvipB0Pz/icon
import FacebookSvgIcon from "./icons/PlasmicIcon__FacebookSvg"; // plasmic-import: -bBgZORh4hWE/icon

createPlasmicElementProxy;

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array("claimCta");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props) {
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
    <footer
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
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__qNzC)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___1H261)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bEm7B)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__uGkZ2
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "28px"
                    : "62px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/image_lab_2024/images/image24.png",
                  fullWidth: 1367,
                  fullHeight: 267,
                  aspectRatio: undefined
                }}
              />
            </PlasmicLink__>
            <div className={classNames(projectcss.all, sty.freeBox__eEcCj)}>
              {renderPlasmicSlot({
                defaultContents: (
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__exzq
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"Claim Your Special 30% Offer Now!"}
                  </PlasmicLink__>
                ),

                value: args.claimCta
              })}
            </div>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__lHt5)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mqk)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dzuBd
                )}
              >
                {"Company"}
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___3Mgmz
                )}
                component={Link}
                href={"/conditions"}
                platform={"nextjs"}
              >
                {"Conditions"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__qhVL
                )}
                component={Link}
                href={"/membership"}
                platform={"nextjs"}
              >
                {"Membership"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__oZe7H
                )}
                component={Link}
                href={"/about"}
                platform={"nextjs"}
              >
                {"About"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__vxue6
                )}
                component={Link}
                href={"/blog"}
                platform={"nextjs"}
              >
                {"Blog"}
              </PlasmicLink__>
            </Stack__>
            {false ? (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__woP50)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__asr64
                  )}
                >
                  {"Services"}
                </div>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__zk2C
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"Injectables"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__qvzpu
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"Skin"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__lt6Rj
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"Lasers"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__uXT
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"Hair + Welness"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__vk88V
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {"All Services"}
                </PlasmicLink__>
              </Stack__>
            ) : null}
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uxe5D)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wbgiT
                )}
              >
                {"Follow Us"}
              </div>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__wjdsQ
                )}
                component={Link}
                href={"https://www.instagram.com/myimagelab"}
                platform={"nextjs"}
              >
                <Icon17Icon
                  className={classNames(projectcss.all, sty.svg___6Qyut)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gWoBa
                  )}
                >
                  {"Instagram"}
                </div>
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__o1Uyh
                )}
                component={Link}
                href={"https://www.facebook.com/profile.php?id=100091962347273"}
                platform={"nextjs"}
              >
                <FacebookSvgIcon
                  className={classNames(projectcss.all, sty.svg__mVwmj)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__n3W1X
                  )}
                >
                  {"Facebook"}
                </div>
              </Stack__>
            </Stack__>
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0HiYd)}
        >
          <p
            data-plasmic-name={"p"}
            data-plasmic-override={overrides.p}
            className={classNames(
              projectcss.all,
              projectcss.p,
              projectcss.__wab_text,
              sty.p
            )}
          >
            {"\u00a9 2024 ImageLab Med Spa, LLC. All rights reserved."}
          </p>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___7EXpR)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__xphpw
              )}
              component={Link}
              href={"/privacy"}
              platform={"nextjs"}
            >
              {"Privacy"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___8MEnw
              )}
              component={Link}
              href={"/accessibility"}
              platform={"nextjs"}
            >
              {"Accessibility"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__khr9L
              )}
              component={Link}
              href={"/hipaa"}
              platform={"nextjs"}
            >
              {"HIPAA"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__cGtN9
              )}
              component={Link}
              href={"/personal-data-request"}
              platform={"nextjs"}
            >
              {"Personal Data Request"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___81PkS
              )}
              component={Link}
              href={"/appointment-cancellation-policy"}
              platform={"nextjs"}
            >
              {"Appointment Cancellation Policy"}
            </PlasmicLink__>
          </Stack__>
        </Stack__>
      </Stack__>
    </footer>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "p"],
  img: ["img"],
  p: ["p"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    p: makeNodeComponent("p"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
