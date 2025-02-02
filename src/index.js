import { BasicContourDrawer } from './BasicContourDrawer';
import { ShapeContourDrawer } from './ShapeContourDrawer';
import { calculateContour } from './calculateContour';

const defaultOptions = {
  nbLevels: 10,
  timeout: 0,
};

/**
 *
 * @class Conrec
 * @param {number[][]} matrix
 * @param {number[]} [options.xs]
 * @param {number[]} [options.ys]
 * @param {boolean} [options.swapAxes]
 */
export class Conrec {
  constructor(matrix, options = {}) {
    const { swapAxes = false } = options;
    this.matrix = matrix;
    this.rows = matrix.length;
    this.columns = matrix[0].length;

    const optionsHasXs = options.xs !== undefined;
    const optionsHasYs = options.ys !== undefined;
    if (swapAxes) {
      // We swap axes, which means xs are in the rows direction. This is the normal
      // way for the conrec library.
      this.xs = optionsHasXs ? options.xs : range(0, this.rows, 1);
      this.ys = optionsHasYs ? options.ys : range(0, this.columns, 1);
    } else {
      // We do not swap axes, so if the user provided xs or ys, we must swap the
      // internal values so the algorithm can still work.
      this.xs = optionsHasYs ? options.ys : range(0, this.rows, 1);
      this.ys = optionsHasXs ? options.xs : range(0, this.columns, 1);
    }

    this.swapAxes = swapAxes;
    this.hasMinMax = false;
  }

  /**
   * @typedef {Object} Output
   * @property {any} contours
   * @property {boolean} timeout - Whether contour generation had to stop early because it reached the timeout
   */

  /**
   *
   * @param {number[]} [options.levels]
   * @param {number} [options.nbLevels=10]
   * @param {string} [options.contourDrawer='basic'] - 'basic' or 'shape'
   * @param {number} [options.timeout=0]
   * @return {Output}
   */
  drawContour(options) {
    options = { ...defaultOptions, ...options };

    let levels;
    if (options.levels) {
      levels = options.levels.slice();
    } else {
      this._computeMinMax();
      const interval = (this.max - this.min) / (options.nbLevels - 1);
      levels = range(this.min, this.max + interval, interval);
    }
    levels.sort((a, b) => a - b);

    let contourDrawer = options.contourDrawer || 'basic';
    if (typeof contourDrawer === 'string') {
      if (contourDrawer === 'basic') {
        contourDrawer = new BasicContourDrawer(levels, this.swapAxes);
      } else if (contourDrawer === 'shape') {
        contourDrawer = new ShapeContourDrawer(levels, this.swapAxes);
      } else {
        throw new Error(`unknown contour drawer: ${contourDrawer}`);
      }
    } else {
      throw new TypeError('contourDrawer must be a string');
    }
    const isTimeout = calculateContour(
      this.matrix,
      this.xs,
      this.ys,
      levels,
      contourDrawer,
      {
        timeout: options.timeout,
      },
    );

    return { contours: contourDrawer.getContour(), timeout: isTimeout };
  }

  _computeMinMax() {
    if (!this.hasMinMax) {
      const r = minMax(this.matrix);
      this.min = r.min;
      this.max = r.max;
      this.hasMinMax = true;
    }
  }
}

function range(from, to, step) {
  const result = [];
  for (let i = from; i < to; i += step) result.push(i);
  return result;
}

function minMax(matrix) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] < min) min = row[j];
      if (row[j] > max) max = row[j];
    }
  }
  return {
    min,
    max,
  };
}
