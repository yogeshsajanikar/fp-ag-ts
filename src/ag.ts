/**
 * @copyright Yogesh Sajanikar
 */

import {tree} from 'fp-ts'
import {pipe} from 'fp-ts/function'

/**
 * This attribute grammar framework is inspired from "A functional semantics 
 * of attribute grammars", 2002, Kevin Backhouse. 
 */

/**
 * An AST is a rose tree
 */
export type AST<T> = tree.Tree<T>

/**
 * Attribute grammar is specified by a production mapped to a semantic rule
 */
export type AG<T,Alpha,Beta> = (production: T) => SemRule<Alpha,Beta>

/**
 * A semantic rules process inherited and synthetic rules.
 */
export type SemRule<Alpha,Beta> = (aB: [Alpha, Beta[]]) => [Beta, Alpha[]]

/**
 * Given an AST and attribute grammar, AG, it is possible to represent
 * Semantic tree.
 */
export type SemTree<Alpha,Beta> = tree.Tree<SemRule<Alpha,Beta>>

/**
 * Given an AST, and attribute grammar, AG, create the semantic tree.
 * @param ag Attribute grammar
 * @returns semantic tree
 */
export const mkSemTree = <T,Alpha,Beta>(ag: AG<T,Alpha,Beta>) => (ast: AST<T>) : SemTree<Alpha,Beta> => pipe(ast, tree.map(ag))

// A goal of an attribute grammar evaluator is to produce a tree containing
// the attribute values.

export type InputTree<Alpha,Beta> = tree.Tree<[Alpha, Beta[]]>
export type OutputTree<Alpha,Beta> = tree.Tree<[Beta,Alpha[]]>

const fst = <A,B>(t:[A,B]): A => t[0]
const snd = <A,B>(t:[A,B]): B => t[1]

/**
 * 
 * @param alpha I
 * @returns 
 */
export const shift = <Alpha>(alpha: Alpha) => <Beta>(out: OutputTree<Alpha,Beta>): InputTree<Alpha,Beta> => {
  throw Error('Not implemented')
}
