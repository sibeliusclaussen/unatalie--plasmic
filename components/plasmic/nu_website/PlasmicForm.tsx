// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jodssu5PmGaRR5vFRfdqKh
// Component: 3MBHwfPUnY

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
import TextInput from "../../TextInput"; // plasmic-import: 9QfDpVXFq99/component
import Button from "../../Button"; // plasmic-import: jGsW_a0TMYi/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nu_website.module.css"; // plasmic-import: jodssu5PmGaRR5vFRfdqKh/projectcss
import sty from "./PlasmicForm.module.css"; // plasmic-import: 3MBHwfPUnY/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: MPYqPwVjqCm/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iemRUT8B78Y/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: tfqLjeUE7Y3/icon

export type PlasmicForm__VariantMembers = {};
export type PlasmicForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicForm__VariantsArgs;
export const PlasmicForm__VariantProps = new Array<VariantPropType>();

export type PlasmicForm__ArgsType = {};
type ArgPropType = keyof PlasmicForm__ArgsType;
export const PlasmicForm__ArgProps = new Array<ArgPropType>();

export type PlasmicForm__OverridesType = {
  root?: p.Flex<"form">;
  textInput?: p.Flex<typeof TextInput>;
  textInput2?: p.Flex<typeof TextInput>;
  textInput3?: p.Flex<typeof TextInput>;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultFormProps {
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

function PlasmicForm__RenderFunc(props: {
  variants: PlasmicForm__VariantsArgs;
  args: PlasmicForm__ArgsType;
  overrides: PlasmicForm__OverridesType;
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <p.Stack
      as={"form"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      action={"https://api.web3forms.com/submit" as const}
      aria-required={"" as const}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      method={"post" as const}
    >
      <input
        className={classNames(
          projectcss.all,
          projectcss.input,
          sty.hiddenInput___5EgYc
        )}
        disabled={false}
        name={"access_key" as const}
        placeholder={"" as const}
        type={"hidden" as const}
        value={"fd3245fe-2f97-4c26-963a-2c2dd0996433" as const}
      />

      <TextInput
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput}
        aria-label={"" as const}
        className={classNames("__wab_instance", sty.textInput)}
        name={"name" as const}
        onChange={(...eventArgs) => {
          p.generateStateOnChangeProp($state, ["textInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        placeholder={"Name" as const}
        required={true}
        type={"text" as const}
        value={p.generateStateValueProp($state, ["textInput", "value"])}
      />

      <TextInput
        data-plasmic-name={"textInput2"}
        data-plasmic-override={overrides.textInput2}
        className={classNames("__wab_instance", sty.textInput2)}
        name={"email" as const}
        onChange={(...eventArgs) => {
          p.generateStateOnChangeProp($state, ["textInput2", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        placeholder={"E-mail" as const}
        required={true}
        type={"email" as const}
        value={p.generateStateValueProp($state, ["textInput2", "value"])}
      />

      <TextInput
        data-plasmic-name={"textInput3"}
        data-plasmic-override={overrides.textInput3}
        className={classNames("__wab_instance", sty.textInput3)}
        name={"subject" as const}
        onChange={(...eventArgs) => {
          p.generateStateOnChangeProp($state, ["textInput3", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        placeholder={"Subject" as const}
        required={true}
        type={"text" as const}
        value={p.generateStateValueProp($state, ["textInput3", "value"])}
      />

      <textarea
        data-plasmic-name={"textarea"}
        data-plasmic-override={overrides.textarea}
        className={classNames(
          projectcss.all,
          projectcss.textarea,
          sty.textarea
        )}
        name={"message" as const}
        placeholder={"Tell me what you are looking for" as const}
        required={true}
      />

      <input
        className={classNames(
          projectcss.all,
          projectcss.input,
          sty.hiddenInput__eofD
        )}
        disabled={false}
        name={"redirect" as const}
        type={"hidden" as const}
        value={"https://unatalie.com/contact" as const}
      />

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        buttonType={"submit" as const}
        className={classNames("__wab_instance", sty.button)}
        color={"sand" as const}
        shape={"sharp" as const}
        size={"compact" as const}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"SEND"}
        </div>
      </Button>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "textInput",
    "textInput2",
    "textInput3",
    "textarea",
    "button",
    "text"
  ],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"],
  textarea: ["textarea"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "form";
  textInput: typeof TextInput;
  textInput2: typeof TextInput;
  textInput3: typeof TextInput;
  textarea: "textarea";
  button: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForm__VariantsArgs;
    args?: PlasmicForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicForm__ArgsType,
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
          internalArgPropNames: PlasmicForm__ArgProps,
          internalVariantPropNames: PlasmicForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicForm";
  } else {
    func.displayName = `PlasmicForm.${nodeName}`;
  }
  return func;
}

export const PlasmicForm = Object.assign(
  // Top-level PlasmicForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicForm
    internalVariantProps: PlasmicForm__VariantProps,
    internalArgProps: PlasmicForm__ArgProps
  }
);

export default PlasmicForm;
/* prettier-ignore-end */