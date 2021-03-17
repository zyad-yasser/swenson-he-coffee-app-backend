import { NextFunction, Request, Response } from 'express';
import { ICoffeePodControllerDependencies } from '../interfaces/coffee-pod-controller-dependencies.interface';
import { IRepository } from '../interfaces/repository.interface';

export class CoffeePodController {
  private coffeePodRepository: IRepository;

  constructor({ coffeePodRepository }: ICoffeePodControllerDependencies) {
    this.coffeePodRepository = coffeePodRepository;
  }

  public list = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const coffeeMachinesList = await this.coffeePodRepository.find();

      res
        .status(200)
        .json(coffeeMachinesList);

    } catch (error) {
      next(error);
    }
  };

  public listWithFilters = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;

      const coffeeMachinesList = await this.coffeePodRepository.findWithFilters(params);

      res
        .status(200)
        .json(coffeeMachinesList);

    } catch (error) {
      next(error);
    }
  };
}
