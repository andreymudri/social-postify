import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationsRepository } from './publications.repository';

@Injectable()
export class PublicationsService {
  constructor(
    private readonly publicationsRepository: PublicationsRepository,
  ) {}
  create(createPublicationDto: CreatePublicationDto) {
    const create = this.publicationsRepository.create(createPublicationDto);
    return create;
  }

  findAll() {

  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
