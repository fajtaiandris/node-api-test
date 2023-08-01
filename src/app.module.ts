import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostModule } from './post/post.module';
import { TagController } from './tag/tag.controller';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    PostModule,
    TagModule,
  ],
  controllers: [AppController, TagController],
  providers: [AppService],
})
export class AppModule {}
