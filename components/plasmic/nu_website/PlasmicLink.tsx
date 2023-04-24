// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jodssu5PmGaRR5vFRfdqKh
// Component: -lNsbp_1Q5

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nu_website.module.css"; // plasmic-import: jodssu5PmGaRR5vFRfdqKh/projectcss
import sty from "./PlasmicLink.module.css"; // plasmic-import: -lNsbp_1Q5/css

export type PlasmicLink__VariantMembers = {
  active: "active";
};
export type PlasmicLink__VariantsArgs = {
  active?: SingleBooleanChoiceArg<"active">;
};
type VariantPropType = keyof PlasmicLink__VariantsArgs;
export const PlasmicLink__VariantProps = new Array<VariantPropType>("active");

export type PlasmicLink__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLink__ArgsType;
export const PlasmicLink__ArgProps = new Array<ArgPropType>("children");

export type PlasmicLink__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultLinkProps {
  children?: React.ReactNode;
  active?: SingleBooleanChoiceArg<"active">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLink__RenderFunc(props: {
  variants: PlasmicLink__VariantsArgs;
  args: PlasmicLink__ArgsType;
  overrides: PlasmicLink__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "active",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.active
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
        sty.root,
        { [sty.rootactive]: hasVariant($state, "active", "active") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Home",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenactive]: hasVariant(
              $state,
              "active",
              "active"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLink__VariantsArgs;
    args?: PlasmicLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLink__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLink__ArgProps,
          internalVariantPropNames: PlasmicLink__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLink";
  } else {
    func.displayName = `PlasmicLink.${nodeName}`;
  }
  return func;
}

export const PlasmicLink = Object.assign(
  // Top-level PlasmicLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicLink
    internalVariantProps: PlasmicLink__VariantProps,
    internalArgProps: PlasmicLink__ArgProps
  }
);

export default PlasmicLink;
/* prettier-ignore-end */
