// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jodssu5PmGaRR5vFRfdqKh
// Component: uzAXvYpYsd

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
import Button from "../../Button"; // plasmic-import: jGsW_a0TMYi/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nu_website.module.css"; // plasmic-import: jodssu5PmGaRR5vFRfdqKh/projectcss
import sty from "./PlasmicFactsheet.module.css"; // plasmic-import: uzAXvYpYsd/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iemRUT8B78Y/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: tfqLjeUE7Y3/icon

export type PlasmicFactsheet__VariantMembers = {};
export type PlasmicFactsheet__VariantsArgs = {};
type VariantPropType = keyof PlasmicFactsheet__VariantsArgs;
export const PlasmicFactsheet__VariantProps = new Array<VariantPropType>();

export type PlasmicFactsheet__ArgsType = {
  number?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicFactsheet__ArgsType;
export const PlasmicFactsheet__ArgProps = new Array<ArgPropType>(
  "number",
  "title",
  "children",
  "slot"
);

export type PlasmicFactsheet__OverridesType = {
  root?: p.Flex<"div">;
  categoria?: p.Flex<"div">;
  number?: p.Flex<"div">;
  p?: p.Flex<"p">;
};

export interface DefaultFactsheetProps {
  number?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
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

function PlasmicFactsheet__RenderFunc(props: {
  variants: PlasmicFactsheet__VariantsArgs;
  args: PlasmicFactsheet__ArgsType;
  overrides: PlasmicFactsheet__OverridesType;
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

  return (
    <p.Stack
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
        sty.root
      )}
    >
      {true ? (
        <div
          data-plasmic-name={"categoria"}
          data-plasmic-override={overrides.categoria}
          className={classNames(projectcss.all, sty.categoria)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Global Warming",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      ) : null}
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zuxx8)}
      >
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6LU7P)}
          >
            {true ? (
              <div
                data-plasmic-name={"number"}
                data-plasmic-override={overrides.number}
                className={classNames(projectcss.all, sty.number)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "189",
                  value: args.number,
                  className: classNames(sty.slotTargetNumber)
                })}
              </div>
            ) : null}
            <p
              data-plasmic-name={"p"}
              data-plasmic-override={overrides.p}
              className={classNames(projectcss.all, projectcss.p, sty.p)}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "hectares of native vegetation were lost every hour in 2021 in Brazil. In the Amazon Rainforest, the rate equals about 18 trees felled per second.",
                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </p>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Button
                  buttonType={"" as const}
                  className={classNames("__wab_instance", sty.button__o3An8)}
                  color={"white" as const}
                  endIcon={
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__j4MhZ)}
                      role={"img"}
                    />
                  }
                  outline={true}
                  shape={"sharp" as const}
                  size={"compact" as const}
                >
                  {"Map Biomas Report "}
                </Button>
              ),
              value: args.slot
            })}
          </p.Stack>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "categoria", "number", "p"],
  categoria: ["categoria"],
  number: ["number"],
  p: ["p"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  categoria: "div";
  number: "div";
  p: "p";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFactsheet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFactsheet__VariantsArgs;
    args?: PlasmicFactsheet__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFactsheet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFactsheet__ArgsType,
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
          internalArgPropNames: PlasmicFactsheet__ArgProps,
          internalVariantPropNames: PlasmicFactsheet__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFactsheet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFactsheet";
  } else {
    func.displayName = `PlasmicFactsheet.${nodeName}`;
  }
  return func;
}

export const PlasmicFactsheet = Object.assign(
  // Top-level PlasmicFactsheet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    categoria: makeNodeComponent("categoria"),
    number: makeNodeComponent("number"),
    p: makeNodeComponent("p"),

    // Metadata about props expected for PlasmicFactsheet
    internalVariantProps: PlasmicFactsheet__VariantProps,
    internalArgProps: PlasmicFactsheet__ArgProps
  }
);

export default PlasmicFactsheet;
/* prettier-ignore-end */
