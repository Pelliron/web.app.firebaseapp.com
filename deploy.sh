#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="${1:-}"
if [[ -z "$PROJECT_ID" ]]; then
  read -r -p "Введите Firebase Project ID: " PROJECT_ID
fi

if [[ -z "$PROJECT_ID" ]]; then
  echo "Project ID не указан." >&2
  exit 1
fi

if ! command -v firebase >/dev/null 2>&1; then
  echo "Firebase CLI не найден. Установите: npm install -g firebase-tools" >&2
  exit 1
fi

python3 - "$PROJECT_ID" <<'PY'
import json, sys
project_id=sys.argv[1]
with open('.firebaserc','w',encoding='utf-8') as f:
    json.dump({'projects':{'default':project_id}},f,ensure_ascii=False,indent=2)
    f.write('\n')
PY

firebase deploy --only hosting --project "$PROJECT_ID"
