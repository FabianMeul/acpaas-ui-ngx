import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	AutoCompleteModule,
	UploadModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { RouterModule } from '@angular/router';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		AutoCompleteModule,
		UploadModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
