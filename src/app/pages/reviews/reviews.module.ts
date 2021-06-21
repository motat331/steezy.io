import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
    declarations: [ReviewsComponent],
    imports: [CommonModule, ReviewsRoutingModule, FooterModule],
})
export class ReviewsModule {}
