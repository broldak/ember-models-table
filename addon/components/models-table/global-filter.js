import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/global-filter';
import {action, computed} from '@ember/object';
import {alias} from '@ember/object/computed';

/**
 * Global filter element used within [models-table](Components.ModelsTable.html).
 *
 * Its value is used for all data-items and for each columns `propertyName`.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.GlobalFilter />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.GlobalFilter>
 *     {{input value=MT.globalFilter}}
 *     <button disabled={{if MT.globalFilterUsed "disabled"}} {{action (mut MT.globalFilter) ""}}>
 *       Clear Global Filter
 *     </button>
 *   </MT.GlobalFilter>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @namespace Components
 * @class ModelsTableGlobalFilter
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class GlobalFilterComponent extends Component {

  /**
   * @property globalFilterWrapper
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.globalFilterWrapper') globalFilterWrapper;

  /**
   * Bound from [ModelsTable.filterString](Components.ModelsTable.html#property_filterString)
   *
   * @property value
   * @type string
   * @default null
   */
  value = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from [ModelsTable.globalFilterUsed](Components.ModelsTable.html#property_globalFilterUsed)
   *
   * @property globalFilterUsed
   * @type boolean
   * @default null
   */
  globalFilterUsed = null;

  /**
   * @property inputId
   * @type string
   * @private
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-global-filter`;
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop() {}

}
