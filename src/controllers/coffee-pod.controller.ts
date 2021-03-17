import { IController } from './../interfaces/controller.interface';
import { NextFunction, Request, Response } from 'express';
import { ICoffeePodControllerDependencies } from '../interfaces/coffee-pod-controller-dependencies.interface';
import { IRepository } from '../interfaces/repository.interface';

export class CoffeePodController implements IController {
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
      const { query } = req;

      const coffeeMachinesList = await this.coffeePodRepository.findWithFilters(query);

      res
        .status(200)
        .json(coffeeMachinesList);

    } catch (error) {
      next(error);
    }
  };
}
