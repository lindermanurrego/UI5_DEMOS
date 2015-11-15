
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.layout --------------------------------------------------------------------------


// ---- sap.ui.layout.form --------------------------------------------------------------------------


// ---- sap.ui.layout.form.Form --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/Form.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormContainers formContainers} <strong>(default aggregation)</strong> : sap.ui.layout.form.FormContainer[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.FormLayout</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Form control.
 * Holder for form control to be rendered in a specific form layout.
 * A Form supports VariantLayoutData for it's content to allow a simple switching of Layouts.
 * @extends sap.ui.core.Control
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.Form = function(sId,mSettings) {};
/**
 * 
 * Adds some formContainer <code>oFormContainer</code> 
 * to the aggregation named <code>formContainers</code>.
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer the formContainer to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.addFormContainer = function(oFormContainer) { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Destroys all the formContainers in the aggregation 
 * named <code>formContainers</code>.
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyFormContainers = function() { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Destroys the layout in the aggregation 
 * named <code>layout</code>.
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyLayout = function() { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyTitle = function() { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.Form with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.Form.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>editable</code>.
 * Applies a device and theme specific line-height to the form elements if the form has editable content.
 * In this case all (not only the editable) rows of the form will get the line height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @since 1.20.0
 * 
 */
sap.ui.layout.form.Form.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for aggregation <code>formContainers</code>.<br/>
 * FormContainers with the content of the form.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for form/Form.
 * @return {sap.ui.layout.form.FormContainer[]}
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getFormContainers = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>layout</code>.<br/>
 * Layout of the form.
 * @return {sap.ui.layout.form.FormLayout}
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getLayout = function() { return new sap.ui.layout.form.FormLayout(); };

/**
 * 
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Form. Can either be a Label object, or a simple string.
 * @return {sap.ui.core.Title|string}
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible Forms are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the form.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.layout.form.FormContainer</code> in the aggregation named <code>formContainers</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer the formContainer whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.indexOfFormContainer = function(oFormContainer) { return 0; };

/**
 * 
 * Inserts a formContainer into the aggregation named <code>formContainers</code>.
 * @param {sap.ui.layout.form.FormContainer}
 *          oFormContainer the formContainer to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formContainer should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formContainer is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.insertFormContainer = function(oFormContainer,iIndex) { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>formContainers</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.layout.form.FormContainer[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeAllFormContainers = function() { return new Array(); };

/**
 * 
 * Removes an formContainer from the aggregation named <code>formContainers</code>.
 * @param {int | string | sap.ui.layout.form.FormContainer} vFormContainer the formContainer to remove or its index or id
 * @return {sap.ui.layout.form.FormContainer} the removed formContainer or null
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeFormContainer = function(vFormContainer) { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Setter for property <code>editable</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @since 1.20.0
 * 
 */
sap.ui.layout.form.Form.prototype.setEditable = function(bEditable) { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Setter for the aggregated <code>layout</code>.
 * @param {sap.ui.layout.form.FormLayout} oLayout
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setLayout = function(oLayout) { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title|string} oTitle
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setTitle = function(oTitle) { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setVisible = function(bVisible) { return new sap.ui.layout.form.Form(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setWidth = function(sWidth) { return new sap.ui.layout.form.Form(); };


// ---- sap.ui.layout.form.FormContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/FormContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormElements formElements} <strong>(default aggregation)</strong> : sap.ui.layout.form.FormElement[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Used to group form elements.
 * Can contain other form elements or containers.
 * @extends sap.ui.core.Element
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.FormContainer = function(sId,mSettings) {};
/**
 * 
 * Adds some formElement <code>oFormElement</code> 
 * to the aggregation named <code>formElements</code>.
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement the formElement to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.addFormElement = function(oFormElement) { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Destroys all the formElements in the aggregation 
 * named <code>formElements</code>.
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyFormElements = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyTitle = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.FormContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>expandable</code>.
 * Defines if the Container is expandable.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getExpandable = function() { return false; };

/**
 * 
 * Getter for property <code>expanded</code>.
 * Group is expanded.
 * This property works only if the Container is expandable.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getExpanded = function() { return false; };

/**
 * 
 * Getter for aggregation <code>formElements</code>.<br/>
 * Elements of the FormContainer.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for form/FormContainer.
 * @return {sap.ui.layout.form.FormElement[]}
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getFormElements = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Container. Can either be a Label object, or a simple string.
 * @return {sap.ui.core.Title|string}
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible FormContainers are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.layout.form.FormElement</code> in the aggregation named <code>formElements</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement the formElement whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.indexOfFormElement = function(oFormElement) { return 0; };

/**
 * 
 * Inserts a formElement into the aggregation named <code>formElements</code>.
 * @param {sap.ui.layout.form.FormElement}
 *          oFormElement the formElement to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formElement should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formElement is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.insertFormElement = function(oFormElement,iIndex) { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>formElements</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.layout.form.FormElement[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeAllFormElements = function() { return new Array(); };

/**
 * 
 * Removes an formElement from the aggregation named <code>formElements</code>.
 * @param {int | string | sap.ui.layout.form.FormElement} vFormElement the formElement to remove or its index or id
 * @return {sap.ui.layout.form.FormElement} the removed formElement or null
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeFormElement = function(vFormElement) { return new sap.ui.layout.form.FormElement(); };

/**
 * 
 * Setter for property <code>expandable</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setExpandable = function(bExpandable) { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Setter for property <code>expanded</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setExpanded = function(bExpanded) { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title|string} oTitle
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setTitle = function(oTitle) { return new sap.ui.layout.form.FormContainer(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setVisible = function(bVisible) { return new sap.ui.layout.form.FormContainer(); };


// ---- sap.ui.layout.form.FormElement --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/FormElement.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Label|string</li>
 * <li>{@link #getFields fields} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A form element is a combination of one label and different controls associated to this label.
 * @extends sap.ui.core.Element
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.FormElement = function(sId,mSettings) {};
/**
 * 
 * Adds some field <code>oField</code> 
 * to the aggregation named <code>fields</code>.
 * @param {sap.ui.core.Control}
 *            oField the field to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.addField = function(oField) { return new sap.ui.layout.form.FormElement(); };

/**
 * 
 * Destroys all the fields in the aggregation 
 * named <code>fields</code>.
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.destroyFields = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * 
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.destroyLabel = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.FormElement with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>fields</code>.<br/>
 * Formular controls.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for form/FormElement.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getFields = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>label</code>.<br/>
 * Label of the fields. Can either be a Label object, or a simple string.
 * @return {sap.ui.core.Label|string}
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getLabel = function() { return new sap.ui.core.Label(); };

/**
 * 
 * Returns the Label Control, even if the Label is entered as Text.
 * @type sap.ui.core.Label
 * @public
 */
sap.ui.layout.form.FormElement.prototype.getLabelControl = function() { return new sap.ui.core.Label(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible FormElements are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>fields</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oField the field whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.indexOfField = function(oField) { return 0; };

/**
 * 
 * Inserts a field into the aggregation named <code>fields</code>.
 * @param {sap.ui.core.Control}
 *          oField the field to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the field should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the field is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the field is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.insertField = function(oField,iIndex) { return new sap.ui.layout.form.FormElement(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>fields</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.removeAllFields = function() { return new Array(); };

/**
 * 
 * Removes an field from the aggregation named <code>fields</code>.
 * @param {int | string | sap.ui.core.Control} vField the field to remove or its index or id
 * @return {sap.ui.core.Control} the removed field or null
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.removeField = function(vField) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for the aggregated <code>label</code>.
 * @param {sap.ui.core.Label|string} oLabel
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.setLabel = function(oLabel) { return new sap.ui.layout.form.FormElement(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.setVisible = function(bVisible) { return new sap.ui.layout.form.FormElement(); };


// ---- sap.ui.layout.form.FormLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/FormLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Base layout for Forms.
 * Other Layouts must inherit from this one.
 * @extends sap.ui.core.Control
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.FormLayout = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.FormLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.layout.form.GridContainerData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/GridContainerData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHalfGrid halfGrid} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Grid layout specific properties for FormContainers.
 * The width and height properties of the elements are ignored since the witdh and heights are defined by the grid cells.
 * @extends sap.ui.core.LayoutData
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.GridContainerData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.GridContainerData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridContainerData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>halfGrid</code>.
 * If set the container takes half the width of the form (8cells), if not it's the full width (16 cells).
 * If the GridLayout is set to be singleColumn the full width of the Grid is only 8 cells. So containers are rendered only one per row.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>halfGrid</code>
 * @public
 * 
 */
sap.ui.layout.form.GridContainerData.prototype.getHalfGrid = function() { return false; };

/**
 * 
 * Setter for property <code>halfGrid</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bHalfGrid  new value for property <code>halfGrid</code>
 * @return {sap.ui.layout.form.GridContainerData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridContainerData.prototype.setHalfGrid = function(bHalfGrid) { return new sap.ui.layout.form.GridContainerData(); };


// ---- sap.ui.layout.form.GridElementCells --------------------------------------------------------------------------


// ---- sap.ui.layout.form.GridElementData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/GridElementData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHCells hCells} : sap.ui.layout.form.GridElementCells (default: 'auto')</li>
 * <li>{@link #getVCells vCells} : int (default: 1)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The grid specific layout data for FormElement fields.
 * The width property of the elements is ignored since the width is defined by grid cells.
 * @extends sap.ui.core.LayoutData
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.GridElementData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.GridElementData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridElementData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>hCells</code>.
 * Number of cells in horizontal direction.
 * If "auto" the size is determined by the number of fields and the available cells. For Labels the auto size is 3 cells.
 * If "full" only one field is allowed within the element. It gets the full width of the row and the label is displayed above. For Labels Full size has no effect.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.layout.form.GridElementCells} the value of property <code>hCells</code>
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.getHCells = function() { return new sap.ui.layout.form.GridElementCells(); };

/**
 * 
 * Getter for property <code>vCells</code>.
 * Number of cells in vertical direction.
 * This property has no effect for labels.
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>vCells</code>
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.getVCells = function() { return 0; };

/**
 * 
 * Setter for property <code>hCells</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.layout.form.GridElementCells} sHCells  new value for property <code>hCells</code>
 * @return {sap.ui.layout.form.GridElementData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.setHCells = function(sHCells) { return new sap.ui.layout.form.GridElementData(); };

/**
 * 
 * Setter for property <code>vCells</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iVCells  new value for property <code>vCells</code>
 * @return {sap.ui.layout.form.GridElementData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.setVCells = function(iVCells) { return new sap.ui.layout.form.GridElementData(); };


// ---- sap.ui.layout.form.GridLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/GridLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSingleColumn singleColumn} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This Layout implements a guideline 2.0 grid. This can be a 16 column grid or an 8 column grid.
 * </p><p>
 * To adjust the content inside the GridLayout GridContainerData and GridElementData could be used.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.GridLayout = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.GridLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>singleColumn</code>.
 * If set the Grid allows only one container column. That means one container is below the other. The whole grid has 8 cells per row.
 * </p><p>
 * If not set containers can use the full width of the grid or two container can be placed beside each other. In this case the whole grid has 16 cell per row.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>singleColumn</code>
 * @public
 * 
 */
sap.ui.layout.form.GridLayout.prototype.getSingleColumn = function() { return false; };

/**
 * 
 * Setter for property <code>singleColumn</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSingleColumn  new value for property <code>singleColumn</code>
 * @return {sap.ui.layout.form.GridLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridLayout.prototype.setSingleColumn = function(bSingleColumn) { return new sap.ui.layout.form.GridLayout(); };


// ---- sap.ui.layout.form.ResponsiveGridLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/ResponsiveGridLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabelSpanL labelSpanL} : int (default: 4)</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int (default: 2)</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int (default: 12)</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int (default: 0)</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int (default: 0)</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int (default: 0)</li>
 * <li>{@link #getColumnsL columnsL} : int (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : int (default: 1)</li>
 * <li>{@link #getBreakpointL breakpointL} : int (default: 1024)</li>
 * <li>{@link #getBreakpointM breakpointM} : int (default: 600)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Renders a form using a Grid. Internally the Grid is used.
 * On the FormContainers, Labels and Fields GridData can be used to cahnge the default rendering. On FormElements GridDada are not supported.
 * If own GridData are used this may be much more complex than the default. So in some cases the calculation for the other content may nor bring the expected result. In this case GridData should be used at all content to disable the default behaviour.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>breakpointL</code>.
 * Breakpoint between Medium size and Large size.
 * </p><p>
 * Default value is <code>1024</code>
 * @return {int} the value of property <code>breakpointL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointL = function() { return 0; };

/**
 * 
 * Getter for property <code>breakpointM</code>.
 * Breakpoint between Small size and Medium size.
 * </p><p>
 * Default value is <code>600</code>
 * @return {int} the value of property <code>breakpointM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointM = function() { return 0; };

/**
 * 
 * Getter for property <code>columnsL</code>.
 * Form columns for large size.
 * The number of columns for large size must not be smaller that the number of columns for medium size
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>columnsL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsL = function() { return 0; };

/**
 * 
 * Getter for property <code>columnsM</code>.
 * Form columns for medium size.
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>columnsM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsM = function() { return 0; };

/**
 * 
 * Getter for property <code>emptySpanL</code>.
 * Number of grid cells that are empty at the end of each line on large size.
 * </p><p>
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>emptySpanL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanL = function() { return 0; };

/**
 * 
 * Getter for property <code>emptySpanM</code>.
 * Number of grid cells that are empty at the end of each line on medium size.
 * </p><p>
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>emptySpanM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanM = function() { return 0; };

/**
 * 
 * Getter for property <code>emptySpanS</code>.
 * Number of grid cells that are empty at the end of each line on small size.
 * </p><p>
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>emptySpanS</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanS = function() { return 0; };

/**
 * 
 * Getter for property <code>labelSpanL</code>.
 * Default span for labels in large size.
 * This span is only used if more than 1 container is in one line, if only 1 container is in the line the labelSpanM value is used.
 * </p><p>
 * Default value is <code>4</code>
 * @return {int} the value of property <code>labelSpanL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanL = function() { return 0; };

/**
 * 
 * Getter for property <code>labelSpanM</code>.
 * Default span for labels in medium size.
 * This property is used for full size containers. if more than one Container is in one line, labelSpanL is used.
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>labelSpanM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanM = function() { return 0; };

/**
 * 
 * Getter for property <code>labelSpanS</code>.
 * Default span for labels in small size.
 * </p><p>
 * Default value is <code>12</code>
 * @return {int} the value of property <code>labelSpanS</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanS = function() { return 0; };

/**
 * 
 * Setter for property <code>breakpointL</code>.
 * </p><p>
 * Default value is <code>1024</code> 
 * @param {int} iBreakpointL  new value for property <code>breakpointL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>breakpointM</code>.
 * </p><p>
 * Default value is <code>600</code> 
 * @param {int} iBreakpointM  new value for property <code>breakpointM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>columnsL</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iColumnsL  new value for property <code>columnsL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>columnsM</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iColumnsM  new value for property <code>columnsM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>emptySpanL</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iEmptySpanL  new value for property <code>emptySpanL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>emptySpanM</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iEmptySpanM  new value for property <code>emptySpanM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>emptySpanS</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iEmptySpanS  new value for property <code>emptySpanS</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>labelSpanL</code>.
 * </p><p>
 * Default value is <code>4</code> 
 * @param {int} iLabelSpanL  new value for property <code>labelSpanL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>labelSpanM</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iLabelSpanM  new value for property <code>labelSpanM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * 
 * Setter for property <code>labelSpanS</code>.
 * </p><p>
 * Default value is <code>12</code> 
 * @param {int} iLabelSpanS  new value for property <code>labelSpanS</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.layout.form.ResponsiveGridLayout(); };


// ---- sap.ui.layout.form.ResponsiveLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/ResponsiveLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Renders a form with responsive layout. Internally the ResponsiveFlowLayout is used.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.ResponsiveLayout = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.ResponsiveLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.layout.form.SimpleForm --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new form/SimpleForm.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMaxContainerCols maxContainerCols} : int (default: 2)</li>
 * <li>{@link #getMinWidth minWidth} : int (default: -1)</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getLabelMinWidth labelMinWidth} : int (default: 192)</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.SimpleFormLayout (default: sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout)</li>
 * <li>{@link #getLabelSpanL labelSpanL} : int (default: 4)</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int (default: 2)</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int (default: 12)</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int (default: 0)</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int (default: 0)</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int (default: 0)</li>
 * <li>{@link #getColumnsL columnsL} : int (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : int (default: 1)</li>
 * <li>{@link #getBreakpointL breakpointL} : int (default: 1024)</li>
 * <li>{@link #getBreakpointM breakpointM} : int (default: 600)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Element[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Use the SimpleForm to create a form based on title, label and fields that are stacked in the content aggregation. Add Title to start a new FormContainer(Group). Add Label to start a new row in the container. Add Input/Display controls as needed. Use LayoutData to influence the layout for special cases in the Input/Display controls.
 * @extends sap.ui.core.Control
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.SimpleForm = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Element}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.addContent = function(oContent) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyContent = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyTitle = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.form.SimpleForm with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.SimpleForm.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>breakpointL</code>.
 * Breakpoint between Medium size and Large size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>1024</code>
 * @return {int} the value of property <code>breakpointL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointL = function() { return 0; };

/**
 * 
 * Getter for property <code>breakpointM</code>.
 * Breakpoint between Small size and Medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>600</code>
 * @return {int} the value of property <code>breakpointM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointM = function() { return 0; };

/**
 * 
 * Getter for property <code>columnsL</code>.
 * Form columns for large size.
 * The number of columns for large size must not be smaller that the number of columns for medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>columnsL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsL = function() { return 0; };

/**
 * 
 * Getter for property <code>columnsM</code>.
 * Form columns for medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>columnsM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsM = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The form content.
 * Add a Title control to start a new group (Container).
 * Add a Label control to start a new row (Element).
 * Add controls as Input fields, text fields or other as needed.
 * Use LayoutData to influence the layout for special cases in the single controls.
 * For example, if a ResponsiveLayout is used as layout the form content is weighted using weight 3 for the labels and weight 5 for the fields part. Per default the label column is 192 pixels wide.
 * If your Input controls should influence their width you can add sap.ui.layout.ResponsiveFlowLayoutData to them via setLayoutData method.
 * Ensure that the sum of the weights in the ResponsiveFlowLayoutData does not use more than 5 as this is the total width of Input control part of each form row.
 * Example for a row where the Input takes 4 and the Text takes 1 weight:
 * new sap.ui.commons.Label({text:"Label"});
 * new sap.ui.commons.TextField({value:"Weight 4",
 * layoutData:new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
 * new sap.ui.commons.TextView({text:"Weight 1",
 * layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for form/SimpleForm.
 * @return {sap.ui.core.Element[]}
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>editable</code>.
 * Applies a device and theme specific line-height to the form elements if the form has editable content.
 * In this case all (not only the editable) rows of the form will get the line height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for property <code>emptySpanL</code>.
 * Number of grid cells that are empty at the end of each line on large size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>emptySpanL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanL = function() { return 0; };

/**
 * 
 * Getter for property <code>emptySpanM</code>.
 * Number of grid cells that are empty at the end of each line on medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>emptySpanM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanM = function() { return 0; };

/**
 * 
 * Getter for property <code>emptySpanS</code>.
 * Number of grid cells that are empty at the end of each line on small size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>emptySpanS</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanS = function() { return 0; };

/**
 * 
 * Getter for property <code>labelMinWidth</code>.
 * Specifies the min-width in pixels of the label in all form containers. (only used if ResponsiveLaout is used as Layout)
 * </p><p>
 * Default value is <code>192</code>
 * @return {int} the value of property <code>labelMinWidth</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelMinWidth = function() { return 0; };

/**
 * 
 * Getter for property <code>labelSpanL</code>.
 * Default span for labels in large size.
 * This span is only used if more than 1 container is in one line, if only 1 container is in the line the labelSpanM value is used.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>4</code>
 * @return {int} the value of property <code>labelSpanL</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanL = function() { return 0; };

/**
 * 
 * Getter for property <code>labelSpanM</code>.
 * Default span for labels in medium size.
 * This property is used for full size containers. If more than one Container is in one line, labelSpanL is used.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>labelSpanM</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanM = function() { return 0; };

/**
 * 
 * Getter for property <code>labelSpanS</code>.
 * Default span for labels in small size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 * </p><p>
 * Default value is <code>12</code>
 * @return {int} the value of property <code>labelSpanS</code>
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanS = function() { return 0; };

/**
 * 
 * Getter for property <code>layout</code>.
 * The FormLayout that is used to render the SimpleForm
 * </p><p>
 * Default value is <code>ResponsiveLayout</code>
 * @return {sap.ui.layout.form.SimpleFormLayout} the value of property <code>layout</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLayout = function() { return new sap.ui.layout.form.SimpleFormLayout(); };

/**
 * 
 * Getter for property <code>maxContainerCols</code>.
 * The maximum amount of inner FormContainers per row that is used before a new row is started.
 * (If a ResponsiveGridLayout is used as layout this property is not used. Please use the properties ColumnsL and ColumnsM in this case.)
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>maxContainerCols</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getMaxContainerCols = function() { return 0; };

/**
 * 
 * Getter for property <code>minWidth</code>.
 * The overall minimal width in pixels that is used for the SimpleForm. If the available width is below the given minWidth the SimpleForm will create a new row for the next FormContainer.
 * -1 value is default meaning that inner FormContainers will be stacked until maxCols is reached, irrespective if a maxWidth is reached or the available parents width is reached.
 * (only used if ResponsiveLayout is used as Layout)
 * </p><p>
 * Default value is <code>-1</code>
 * @return {int} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getMinWidth = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the SimpleForm. Can either be a Label object, or a simple string.
 * @return {sap.ui.core.Title|string}
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Element}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Element} vContent the content to remove or its index or id
 * @return {sap.ui.core.Element} the removed content or null
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeContent = function(vContent) { return new sap.ui.core.Element(); };

/**
 * 
 * Setter for property <code>breakpointL</code>.
 * </p><p>
 * Default value is <code>1024</code> 
 * @param {int} iBreakpointL  new value for property <code>breakpointL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>breakpointM</code>.
 * </p><p>
 * Default value is <code>600</code> 
 * @param {int} iBreakpointM  new value for property <code>breakpointM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>columnsL</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iColumnsL  new value for property <code>columnsL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>columnsM</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iColumnsM  new value for property <code>columnsM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>editable</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEditable = function(bEditable) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>emptySpanL</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iEmptySpanL  new value for property <code>emptySpanL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>emptySpanM</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iEmptySpanM  new value for property <code>emptySpanM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>emptySpanS</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iEmptySpanS  new value for property <code>emptySpanS</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>labelMinWidth</code>.
 * </p><p>
 * Default value is <code>192</code> 
 * @param {int} iLabelMinWidth  new value for property <code>labelMinWidth</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelMinWidth = function(iLabelMinWidth) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>labelSpanL</code>.
 * </p><p>
 * Default value is <code>4</code> 
 * @param {int} iLabelSpanL  new value for property <code>labelSpanL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>labelSpanM</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iLabelSpanM  new value for property <code>labelSpanM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>labelSpanS</code>.
 * </p><p>
 * Default value is <code>12</code> 
 * @param {int} iLabelSpanS  new value for property <code>labelSpanS</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>layout</code>.
 * </p><p>
 * Default value is <code>ResponsiveLayout</code> 
 * @param {sap.ui.layout.form.SimpleFormLayout} oLayout  new value for property <code>layout</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLayout = function(oLayout) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>maxContainerCols</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iMaxContainerCols  new value for property <code>maxContainerCols</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setMaxContainerCols = function(iMaxContainerCols) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for property <code>minWidth</code>.
 * </p><p>
 * Default value is <code>-1</code> 
 * @param {int} iMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setMinWidth = function(iMinWidth) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * 
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title|string} oTitle
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setTitle = function(oTitle) { return new sap.ui.layout.form.SimpleForm(); };


// ---- sap.ui.layout.form.SimpleFormLayout --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.form.SimpleFormLayout.toString = function() { return ""; };

// ---- sap.ui.layout.Grid --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Grid.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getVSpacing vSpacing} : int (default: 1)</li>
 * <li>{@link #getHSpacing hSpacing} : int (default: 1)</li>
 * <li>{@link #getPosition position} : sap.ui.layout.GridPosition (default: "Left")</li>
 * <li>{@link #getDefaultSpan defaultSpan} : sap.ui.layout.GridSpan (default: "L3 M6 S12")</li>
 * <li>{@link #getDefaultIndent defaultIndent} : sap.ui.layout.GridIndent (default: "L0 M0 S0")</li>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Grid control is a layout which positions its child controls in a 12 column flow layout. Its children can be specified to take on a variable amount of columns depending on available screen size. With this control it is possible to achieve flexible layouts and line-breaks for large-, medium- and small-sized screens, such as desktop, tablet, and mobile. The Grid control's width can be percentage- or pixel-based and the spacing between its columns can be set to various pre-defined values.
 * @extends sap.ui.core.Control
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.15.0
 * 
 */
sap.ui.layout.Grid = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.addContent = function(oContent) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.destroyContent = function() { return new sap.ui.layout.Grid(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.Grid with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.Grid.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>containerQuery</code>.
 * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>containerQuery</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getContainerQuery = function() { return false; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Controls that are placed into Grid layout.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for Grid.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>defaultIndent</code>.
 * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * </p><p>
 * Default value is <code>"L0 M0 S0"</code>
 * @return {sap.ui.layout.GridIndent} the value of property <code>defaultIndent</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getDefaultIndent = function() { return new sap.ui.layout.GridIndent(); };

/**
 * 
 * Getter for property <code>defaultSpan</code>.
 * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * </p><p>
 * Default value is <code>"L3 M6 S12"</code>
 * @return {sap.ui.layout.GridSpan} the value of property <code>defaultSpan</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getDefaultSpan = function() { return new sap.ui.layout.GridSpan(); };

/**
 * 
 * Getter for property <code>hSpacing</code>.
 * Optional. Horizontal spacing between the content in the Grid. In rem, can be 0, 1 rem or 2 rem.
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>hSpacing</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getHSpacing = function() { return 0; };

/**
 * 
 * Getter for property <code>position</code>.
 * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
 * </p><p>
 * Default value is <code>"Left"</code>
 * @return {sap.ui.layout.GridPosition} the value of property <code>position</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getPosition = function() { return new sap.ui.layout.GridPosition(); };

/**
 * 
 * Getter for property <code>vSpacing</code>.
 * Optional. Vertical spacing between the rows in the Grid. In rem, can be 0, 1 and 2.
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>vSpacing</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getVSpacing = function() { return 0; };

/**
 * 
 * Getter for property <code>width</code>.
 * Optional. Width of the Grid. If not specified, then 100%.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>containerQuery</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bContainerQuery  new value for property <code>containerQuery</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setContainerQuery = function(bContainerQuery) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Setter for property <code>defaultIndent</code>.
 * </p><p>
 * Default value is <code>"L0 M0 S0"</code> 
 * @param {sap.ui.layout.GridIndent} sDefaultIndent  new value for property <code>defaultIndent</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setDefaultIndent = function(sDefaultIndent) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Setter for property <code>defaultSpan</code>.
 * </p><p>
 * Default value is <code>"L3 M6 S12"</code> 
 * @param {sap.ui.layout.GridSpan} sDefaultSpan  new value for property <code>defaultSpan</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setDefaultSpan = function(sDefaultSpan) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Setter for property <code>hSpacing</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iHSpacing  new value for property <code>hSpacing</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setHSpacing = function(iHSpacing) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is <code>"Left"</code> 
 * @param {sap.ui.layout.GridPosition} oPosition  new value for property <code>position</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setPosition = function(oPosition) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Setter for property <code>vSpacing</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iVSpacing  new value for property <code>vSpacing</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setVSpacing = function(iVSpacing) { return new sap.ui.layout.Grid(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setWidth = function(sWidth) { return new sap.ui.layout.Grid(); };


// ---- sap.ui.layout.GridData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GridData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSpan span} : sap.ui.layout.GridSpan</li>
 * <li>{@link #getSpanL spanL} : int</li>
 * <li>{@link #getSpanM spanM} : int</li>
 * <li>{@link #getSpanS spanS} : int</li>
 * <li>{@link #getIndent indent} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getIndentL indentL} : int</li>
 * <li>{@link #getIndentM indentM} : int</li>
 * <li>{@link #getIndentS indentS} : int</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getMoveBackwards moveBackwards} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getMoveForward moveForward} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getLinebreakL linebreakL} : boolean (default: false)</li>
 * <li>{@link #getLinebreakM linebreakM} : boolean (default: false)</li>
 * <li>{@link #getLinebreakS linebreakS} : boolean (default: false)</li>
 * <li>{@link #getSpanLarge spanLarge} : int</li>
 * <li>{@link #getSpanMedium spanMedium} : int</li>
 * <li>{@link #getSpanSmall spanSmall} : int</li>
 * <li>{@link #getIndentLarge indentLarge} : int</li>
 * <li>{@link #getIndentMedium indentMedium} : int</li>
 * <li>{@link #getIndentSmall indentSmall} : int</li>
 * <li>{@link #getVisibleOnLarge visibleOnLarge} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnMedium visibleOnMedium} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnSmall visibleOnSmall} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Grid layout data
 * @extends sap.ui.core.LayoutData
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.15.0
 * 
 */
sap.ui.layout.GridData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.GridData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.GridData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>indent</code>.
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.layout.GridIndent} the value of property <code>indent</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndent = function() { return new sap.ui.layout.GridIndent(); };

/**
 * 
 * Getter for property <code>indentL</code>.
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>indentL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentL = function() { return 0; };

/**
 * 
 * Getter for property <code>indentLarge</code>.
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>indentLarge</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentL instead.
 * 
 */
sap.ui.layout.GridData.prototype.getIndentLarge = function() { return 0; };

/**
 * 
 * Getter for property <code>indentM</code>.
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>indentM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentM = function() { return 0; };

/**
 * 
 * Getter for property <code>indentMedium</code>.
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>indentMedium</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentM instead.
 * 
 */
sap.ui.layout.GridData.prototype.getIndentMedium = function() { return 0; };

/**
 * 
 * Getter for property <code>indentS</code>.
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>indentS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentS = function() { return 0; };

/**
 * 
 * Getter for property <code>indentSmall</code>.
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>indentSmall</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentS instead.
 * 
 */
sap.ui.layout.GridData.prototype.getIndentSmall = function() { return 0; };

/**
 * 
 * Getter for property <code>linebreak</code>.
 * Optional. If this property is set to true, the control on all-size screens causes a line break within the Grid and becomes the first within the next line.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>linebreak</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreak = function() { return false; };

/**
 * 
 * Getter for property <code>linebreakL</code>.
 * Optional. If this property is set to true, the control on large screens causes a line break within the Grid and becomes the first within the next line.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>linebreakL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakL = function() { return false; };

/**
 * 
 * Getter for property <code>linebreakM</code>.
 * Optional. If this property is set to true, the control on medium sized screens causes a line break within the Grid and becomes the first within the next line.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>linebreakM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakM = function() { return false; };

/**
 * 
 * Getter for property <code>linebreakS</code>.
 * Optional. If this property is set to true, the control on small screens causes a line break within the Grid and becomes the first within the next line.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>linebreakS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakS = function() { return false; };

/**
 * 
 * Getter for property <code>moveBackwards</code>.
 * Optional. Moves a cell backwards so many columns as specified.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.layout.GridIndent} the value of property <code>moveBackwards</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getMoveBackwards = function() { return new sap.ui.layout.GridIndent(); };

/**
 * 
 * Getter for property <code>moveForward</code>.
 * Optional. Moves a cell forwards so many columns as specified.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.layout.GridIndent} the value of property <code>moveForward</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getMoveForward = function() { return new sap.ui.layout.GridIndent(); };

/**
 * 
 * Getter for property <code>span</code>.
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.layout.GridSpan} the value of property <code>span</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpan = function() { return new sap.ui.layout.GridSpan(); };

/**
 * 
 * Getter for property <code>spanL</code>.
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>spanL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanL = function() { return 0; };

/**
 * 
 * Getter for property <code>spanLarge</code>.
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>spanLarge</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanL instead.
 * 
 */
sap.ui.layout.GridData.prototype.getSpanLarge = function() { return 0; };

/**
 * 
 * Getter for property <code>spanM</code>.
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>spanM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanM = function() { return 0; };

/**
 * 
 * Getter for property <code>spanMedium</code>.
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>spanMedium</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanM instead.
 * 
 */
sap.ui.layout.GridData.prototype.getSpanMedium = function() { return 0; };

/**
 * 
 * Getter for property <code>spanS</code>.
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>spanS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanS = function() { return 0; };

/**
 * 
 * Getter for property <code>spanSmall</code>.
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>spanSmall</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanS instead.
 * 
 */
sap.ui.layout.GridData.prototype.getSpanSmall = function() { return 0; };

/**
 * 
 * Getter for property <code>visibleL</code>.
 * Defines if this Control is visible on Large screens.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleL = function() { return false; };

/**
 * 
 * Getter for property <code>visibleM</code>.
 * Defines if this Control is visible on Medium size screens.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleM = function() { return false; };

/**
 * 
 * Getter for property <code>visibleOnLarge</code>.
 * Deprecated. Defines if this Control is visible on Large screens.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleOnLarge</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleL instead.
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnLarge = function() { return false; };

/**
 * 
 * Getter for property <code>visibleOnMedium</code>.
 * Deprecated. Defines if this Control is visible on Medium size screens.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleOnMedium</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleM instead.
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnMedium = function() { return false; };

/**
 * 
 * Getter for property <code>visibleOnSmall</code>.
 * Deprecated. Defines if this Control is visible on small screens.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleOnSmall</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleS instead.
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnSmall = function() { return false; };

/**
 * 
 * Getter for property <code>visibleS</code>.
 * Defines if this Control is visible on small screens.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visibleS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleS = function() { return false; };

/**
 * 
 * Setter for property <code>indent</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.layout.GridIndent} sIndent  new value for property <code>indent</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndent = function(sIndent) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>indentL</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iIndentL  new value for property <code>indentL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentL = function(iIndentL) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>indentLarge</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iIndentLarge  new value for property <code>indentLarge</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentL instead.
 * 
 */
sap.ui.layout.GridData.prototype.setIndentLarge = function(iIndentLarge) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>indentM</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iIndentM  new value for property <code>indentM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentM = function(iIndentM) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>indentMedium</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iIndentMedium  new value for property <code>indentMedium</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentM instead.
 * 
 */
sap.ui.layout.GridData.prototype.setIndentMedium = function(iIndentMedium) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>indentS</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iIndentS  new value for property <code>indentS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentS = function(iIndentS) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>indentSmall</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iIndentSmall  new value for property <code>indentSmall</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentS instead.
 * 
 */
sap.ui.layout.GridData.prototype.setIndentSmall = function(iIndentSmall) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>linebreak</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLinebreak  new value for property <code>linebreak</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreak = function(bLinebreak) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>linebreakL</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLinebreakL  new value for property <code>linebreakL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakL = function(bLinebreakL) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>linebreakM</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLinebreakM  new value for property <code>linebreakM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakM = function(bLinebreakM) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>linebreakS</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLinebreakS  new value for property <code>linebreakS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakS = function(bLinebreakS) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>moveBackwards</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.layout.GridIndent} sMoveBackwards  new value for property <code>moveBackwards</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setMoveBackwards = function(sMoveBackwards) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>moveForward</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.layout.GridIndent} sMoveForward  new value for property <code>moveForward</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setMoveForward = function(sMoveForward) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>span</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.layout.GridSpan} sSpan  new value for property <code>span</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpan = function(sSpan) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>spanL</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iSpanL  new value for property <code>spanL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanL = function(iSpanL) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>spanLarge</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iSpanLarge  new value for property <code>spanLarge</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanL instead.
 * 
 */
sap.ui.layout.GridData.prototype.setSpanLarge = function(iSpanLarge) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>spanM</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iSpanM  new value for property <code>spanM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanM = function(iSpanM) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>spanMedium</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iSpanMedium  new value for property <code>spanMedium</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanM instead.
 * 
 */
sap.ui.layout.GridData.prototype.setSpanMedium = function(iSpanMedium) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>spanS</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iSpanS  new value for property <code>spanS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanS = function(iSpanS) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>spanSmall</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iSpanSmall  new value for property <code>spanSmall</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanS instead.
 * 
 */
sap.ui.layout.GridData.prototype.setSpanSmall = function(iSpanSmall) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>visibleL</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleL  new value for property <code>visibleL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleL = function(bVisibleL) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>visibleM</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleM  new value for property <code>visibleM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleM = function(bVisibleM) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>visibleOnLarge</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleOnLarge  new value for property <code>visibleOnLarge</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleL instead.
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnLarge = function(bVisibleOnLarge) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>visibleOnMedium</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleOnMedium  new value for property <code>visibleOnMedium</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleM instead.
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnMedium = function(bVisibleOnMedium) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>visibleOnSmall</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleOnSmall  new value for property <code>visibleOnSmall</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleS instead.
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnSmall = function(bVisibleOnSmall) { return new sap.ui.layout.GridData(); };

/**
 * 
 * Setter for property <code>visibleS</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisibleS  new value for property <code>visibleS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleS = function(bVisibleS) { return new sap.ui.layout.GridData(); };


// ---- sap.ui.layout.GridIndent --------------------------------------------------------------------------


// ---- sap.ui.layout.GridPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.GridPosition.toString = function() { return ""; };

// ---- sap.ui.layout.GridSpan --------------------------------------------------------------------------


// ---- sap.ui.layout.HorizontalLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new HorizontalLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getAllowWrapping allowWrapping} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A layout that provides support for horizontal alignment of controls
 * @extends sap.ui.core.Control
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.HorizontalLayout = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.HorizontalLayout(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.destroyContent = function() { return new sap.ui.layout.HorizontalLayout(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.HorizontalLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.HorizontalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>allowWrapping</code>.
 * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>allowWrapping</code>
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getAllowWrapping = function() { return false; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The controls inside this layout
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for HorizontalLayout.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Whether this HorizontalLayout is visible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.HorizontalLayout(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>allowWrapping</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bAllowWrapping  new value for property <code>allowWrapping</code>
 * @return {sap.ui.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.setAllowWrapping = function(bAllowWrapping) { return new sap.ui.layout.HorizontalLayout(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.setVisible = function(bVisible) { return new sap.ui.layout.HorizontalLayout(); };


// ---- sap.ui.layout.ResponsiveFlowLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ResponsiveFlowLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getResponsive responsive} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is a layout where several controls can be added. These controls are blown up to fit a whole line. If the window resizes the controls are moved between the lines and resized again.
 * @extends sap.ui.core.Control
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.ResponsiveFlowLayout = function(sId,mSettings) {};
/**
 * 
 * These function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * @param {Object}
 *            [oContent] the content that should be added to the layout
 * @public
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.addContent = function(oContent) { return null; };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.layout.ResponsiveFlowLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.destroyContent = function() { return new sap.ui.layout.ResponsiveFlowLayout(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached otherwise the default values are used.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for ResponsiveFlowLayout.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>responsive</code>.
 * If this property is 'false' all added controls keep their widths. Otherwise all added controls will be extended to the possible width of a row.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>responsive</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.getResponsive = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * These function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * @param {Object}
 *            [oContent] the content that should be inserted to the layout
 * @param {int}
 *            [iIndex] the index where the content should be inserted into
 * @public
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.insertContent = function(oContent,iIndex) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * These function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * @param {Object}
 *            [oContent] the content that should be removed from the layout
 * @public
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeContent = function(oContent) { return null; };

/**
 * 
 * Setter for property <code>responsive</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bResponsive  new value for property <code>responsive</code>
 * @return {sap.ui.layout.ResponsiveFlowLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.setResponsive = function(bResponsive) { return new sap.ui.layout.ResponsiveFlowLayout(); };


// ---- sap.ui.layout.ResponsiveFlowLayoutData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ResponsiveFlowLayoutData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMinWidth minWidth} : int (default: 100)</li>
 * <li>{@link #getWeight weight} : int (default: 1)</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getMargin margin} : boolean (default: true)</li>
 * <li>{@link #getLinebreakable linebreakable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within a ResponsiveFlowLayout
 * @extends sap.ui.core.LayoutData
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>linebreak</code>.
 * If this property is set the control where this LayoutData is added to will always cause a linebreak within the ResponsiveFlowLayout
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>linebreak</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getLinebreak = function() { return false; };

/**
 * 
 * Getter for property <code>linebreakable</code>.
 * If this value shows if an element can be wrapped into a new line. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>linebreakable</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getLinebreakable = function() { return false; };

/**
 * 
 * Getter for property <code>margin</code>.
 * This property prevents any margin of the element if set to false
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>margin</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getMargin = function() { return false; };

/**
 * 
 * Getter for property <code>minWidth</code>.
 * This is the minimal size in pixels of an ResponsiveFlowLayout element. The element will be shrinked till this value.
 * </p><p>
 * Default value is <code>100</code>
 * @return {int} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getMinWidth = function() { return 0; };

/**
 * 
 * Getter for property <code>weight</code>.
 * This is the weight of the element that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout each element could have another weight. The bigger the weight of a single element the wider it will be pumped up --> a bigger weight result a bigger width.
 * </p><p>
 * Default value is <code>1</code>
 * @return {int} the value of property <code>weight</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getWeight = function() { return 0; };

/**
 * 
 * Setter for property <code>linebreak</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bLinebreak  new value for property <code>linebreak</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreak = function(bLinebreak) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * 
 * Setter for property <code>linebreakable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bLinebreakable  new value for property <code>linebreakable</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreakable = function(bLinebreakable) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * 
 * Setter for property <code>margin</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bMargin  new value for property <code>margin</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setMargin = function(bMargin) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * 
 * Setter for property <code>minWidth</code>.
 * </p><p>
 * Default value is <code>100</code> 
 * @param {int} iMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setMinWidth = function(iMinWidth) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * 
 * Setter for property <code>weight</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {int} iWeight  new value for property <code>weight</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setWeight = function(iWeight) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };


// ---- sap.ui.layout.VerticalLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VerticalLayout.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * In this layout the elemnts are orderd one below the other
 * @extends sap.ui.core.Control
 * @version 1.20.7
 * @constructor   
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.VerticalLayout = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.layout.VerticalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.VerticalLayout(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.layout.VerticalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.destroyContent = function() { return new sap.ui.layout.VerticalLayout(); };

/**
 * 
 * Creates a new subclass of class sap.ui.layout.VerticalLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.VerticalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Child Controls within the layout.
 * </p><p>
 * <strong>Note</strong>: this is the default aggregation for VerticalLayout.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>enabled</code>.
 * </p><p>
 * If not enabled all controls inside are not enabled automatically.
 * </p><p>
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Whether this VerticalLayout is visible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * CSS width of the vertical layout.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.layout.VerticalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.VerticalLayout(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.layout.VerticalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.setEnabled = function(bEnabled) { return new sap.ui.layout.VerticalLayout(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.VerticalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.setVisible = function(bVisible) { return new sap.ui.layout.VerticalLayout(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.layout.VerticalLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.setWidth = function(sWidth) { return new sap.ui.layout.VerticalLayout(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.layout.form.SimpleFormLayout --------------------------------------------------------------------------

/**
 * 
 * Uses the GridLayout for the SimpleForm 
 * @public
 * @memberOf sap.ui.layout.form.SimpleFormLayout
 */
sap.ui.layout.form.SimpleFormLayout.GridLayout = null;

/**
 * 
 * Uses the ResponsiveGridLayout for the SimpleForm 
 * @public
 * @since 1.16.0
 * @memberOf sap.ui.layout.form.SimpleFormLayout
 */
sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout = null;

/**
 * 
 * Uses the ResponsiveLayout for the SimpleForm 
 * @public
 * @memberOf sap.ui.layout.form.SimpleFormLayout
 */
sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout = null;


// ---- sap.ui.layout.GridPosition --------------------------------------------------------------------------

/**
 * 
 * Grid is centered on the screen. 
 * @public
 * @memberOf sap.ui.layout.GridPosition
 */
sap.ui.layout.GridPosition.Center = null;

/**
 * 
 * Grid is aligned left. 
 * @public
 * @memberOf sap.ui.layout.GridPosition
 */
sap.ui.layout.GridPosition.Left = null;

/**
 * 
 * Grid is aligned to the right. 
 * @public
 * @memberOf sap.ui.layout.GridPosition
 */
sap.ui.layout.GridPosition.Right = null;

