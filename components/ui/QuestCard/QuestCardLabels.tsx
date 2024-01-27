import { GithubLabel } from '@/utils/github/models';

/* eslint-disable import/no-anonymous-default-export */
export default ({ labels }: { labels: GithubLabel[] }) => (
  <div className="flex flex-wrap items-center text-sm text-gray-400 overflow-hidden">
    {labels.map(label => (
      <div
        style={{ border: `1px solid #${label.color} 50%` || 'gray' }}
        className="px-2 bg-slate-800 text-white rounded m-1 flex justify-center items-center">
        <div style={{ backgroundColor: `#${label.color}` }} className="w-2 h-2 mr-2"></div>
        <span style={{ fontSize: 11 }} className="flex-none">
          {label.name}
        </span>
      </div>
    ))}
  </div>
);