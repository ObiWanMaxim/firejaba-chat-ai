import { FeatureFlagsSchema, IFeatureFlags } from '../schema';

/**
 * Analyze the characteristic logo string in the environment variable.
 * @param flagString 从环境变量中读取的特性标志字符串。
 * @returns 解析后的特性标志对象。
 */
export function parseFeatureFlag(flagString?: string): Partial<IFeatureFlags> {
  const flags: Partial<IFeatureFlags> = {};

  if (!flagString) return flags;

  //Replace the Chinese comma with English commas, and press the comma to divide the string
  const flagArray = flagString.trim().replaceAll('，', ',').split(',');

  for (let flag of flagArray) {
    flag = flag.trim();
    if (flag.startsWith('+') || flag.startsWith('-')) {
      const operation = flag[0];
      const key = flag.slice(1);

      const featureKey = key as keyof IFeatureFlags;

      // 检查 key 是否存在于 FeatureFlagsSchema 中
      if (FeatureFlagsSchema.shape[featureKey]) {
        flags[featureKey] = operation === '+';
      }
    }
  }

  return flags;
}
