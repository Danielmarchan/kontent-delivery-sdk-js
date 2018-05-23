import { CodeType, ModuleResolution } from './enums';

export class GeneratorConfig {

    /**
    * Indicates if the first char after replacing underscore will be uppercase
    * e.g. field codename 'first_name' will be converted to 'firstName'
    */
    public readonly uppercaseAfterUnderscoreReplacement: boolean = true;

    public readonly moduleName = 'kentico-cloud-model-generator-utility';
    public readonly propertyResolver = 'propertyResolver';
    public readonly codeOptions = [CodeType.TypeScript, CodeType.JavaScript];
    public readonly moduleOptions = [ModuleResolution.CommonJs, ModuleResolution.ES2015];
    public readonly itemBaseClass = 'ContentItem';
    public readonly fieldsNamespace = 'Fields';
    public readonly CommonJsRequiredName = 'KenticoCloud';
    public readonly npmPackage = 'kentico-cloud-delivery';
    public readonly modularFieldReplacement = this.itemBaseClass + '[]';
    public readonly jsNotice = `
/**
* This class was generated by '${this.moduleName}' at ${new Date()}.
*/`;

    public readonly tsNotice = `
/**
 * This class was generated by '${this.moduleName}' at ${new Date()}.
 *
 * Note: You can substitute '${this.itemBaseClass}' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */`;
}


export const generatorConfig = new GeneratorConfig();
