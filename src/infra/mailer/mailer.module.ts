import { Module, Global } from '@nestjs/common';
import { EmailService } from './mailer.service';

@Global()
@Module({
  providers: [EmailService],
  exports: [EmailService],
})
export class MailerModule {}
