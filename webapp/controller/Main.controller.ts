import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace com.github.dfenerski.issue_async_controller_lifecycle.controller
 */
export default class Main extends BaseController {
	public async onInit(){
		MessageBox.show("Hello World!");
	}

	public sayHello(): void {
		MessageBox.show("Hello World!");
	}
}
