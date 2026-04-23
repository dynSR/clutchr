import { Organization } from '../enums/organization.enum';

const ROOT_PATH: string = 'assets/';
const FONTS_FOLDER_PATH: string = ROOT_PATH + 'fonts/';

export const ASSETS_PLACEHOLDER_LOGO_IMG = ROOT_PATH + 'Logo_Placeholder.png';
export const ASSETS_PLACEHOLDER_PLAYER_IMG = ROOT_PATH + 'Player_Placeholder.png';

export enum AssetFileExtension {
  PNG = '.png',
  JPEG = '.jpeg',
  SVG = '.svg',
  WOFF2 = '.woff2',
}

export function assets(
  path: string,
  fileExtension: AssetFileExtension = AssetFileExtension.PNG,
): string {
  const fullPath: string = ROOT_PATH + path + fileExtension;
  try {
    return fullPath;
  } catch (e) {
    console.error(e);
    throw new Error(`Asset could not be found at ${fullPath}`);
  }
}
