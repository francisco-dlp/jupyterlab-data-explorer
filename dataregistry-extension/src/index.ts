/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

import { JupyterFrontEndPlugin } from "@jupyterlab/application";
import activePlugin from "./active";
export { IActiveDataset } from "./active";
import csvViewerPlugin from "./csvviewer";
import dataRegistryPlugin from "./registry";
import dataExplorerPlugin from "./explorer";
import filesPlugin from "./files";
import snippetsPlugin from "./snippets";
import URLPlugin from "./urls";
import widgetPlugin from "./widgets";
import tableDataPlugin from "./tableData";
import foldersPlugin from "./folders";
import notebooksPlugin from "./notebooks";
import debuggerPlugin from "./debugger";
import rendermimePlugin from "./rendermime";
import browserPlugin from "./browser";

export default [
  activePlugin,
  csvViewerPlugin,
  browserPlugin,
  dataExplorerPlugin,
  dataRegistryPlugin,
  filesPlugin,
  snippetsPlugin,
  URLPlugin,
  widgetPlugin,
  tableDataPlugin,
  foldersPlugin,
  notebooksPlugin,
  debuggerPlugin,
  rendermimePlugin
] as JupyterFrontEndPlugin<any>[];
